from django.http import JsonResponse
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from .models import CarMake, CarModel
from .populate import initiate
import logging
import json
import requests

logger = logging.getLogger(__name__)
backend_url = "http://localhost:3030"


def get_request(endpoint, **kwargs):
    params = ""
    if kwargs:
        values = "/".join(str(v) for v in kwargs.values())
        params = f"/{values}"
    url = f"{backend_url}/{endpoint}{params}"
    return requests.get(url)


def post_request(endpoint, json_payload):
    url = f"{backend_url}/{endpoint}"
    return requests.post(url, json=json_payload)


@csrf_exempt
def login_user(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required"}, status=405)

    data = json.loads(request.body)
    username = data['userName']
    password = data['password']

    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({"userName": username, "status": "Authenticated"})

    return JsonResponse({"userName": "", "status": "Failed"})


def logout_request(request):
    logout(request)
    return JsonResponse({"userName": ""})


@csrf_exempt
def registration(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required"}, status=405)

    data = json.loads(request.body)
    username = data['userName']
    password = data['password']
    first_name = data['firstName']
    last_name = data['lastName']
    email = data['email']

    if User.objects.filter(username=username).exists():
        return JsonResponse({
            "userName": username,
            "status": "User already exists"
        })

    user = User.objects.create_user(
        username=username,
        password=password,
        email=email,
        first_name=first_name,
        last_name=last_name
    )
    user.save()

    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({
            "userName": username,
            "status": "Authenticated"
        })

    return JsonResponse({
        "userName": username,
        "status": "Failed"
    })


@csrf_exempt
def get_cars(request):
    if CarMake.objects.count() == 0:
        initiate()

    car_models = CarModel.objects.select_related('car_make')
    cars = []
    for car_model in car_models:
        cars.append({
            "CarModel": car_model.name,
            "CarMake": car_model.car_make.name,
            "id": car_model.id
        })

    return JsonResponse({"CarModels": cars})


def get_dealerships(request, state="All"):
    if state == "All":
        response = get_request("fetchDealers")
    else:
        response = get_request("fetchDealers", state=state)

    if response.status_code == 200:
        return JsonResponse({
            "status": 200,
            "dealers": response.json()
        })

    return JsonResponse({
        "status": response.status_code,
        "dealers": []
    })


def get_dealer_details(request, dealer_id):
    response = get_request("fetchDealer", id=dealer_id)
    if response.status_code == 200:
        dealer_data = response.json()
        return JsonResponse({
            "status": 200,
            "dealer": dealer_data
        })

    return JsonResponse({
        "status": response.status_code,
        "dealer": []
    })


def get_dealer_reviews(request, dealer_id):
    response = get_request("fetchReviews/dealer", id=dealer_id)
    if response.status_code == 200:
        return JsonResponse({
            "status": 200,
            "reviews": response.json()
        })

    return JsonResponse({
        "status": response.status_code,
        "reviews": []
    })


@csrf_exempt
def add_review(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required"}, status=405)

    data = json.loads(request.body)
    response = post_request("insert_review", data)

    if response.status_code in [200, 201]:
        return JsonResponse({
            "status": 200,
            "review": response.json()
        })

    return JsonResponse({
        "status": response.status_code,
        "review": {}
    })