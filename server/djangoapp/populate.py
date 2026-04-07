from datetime import date
from .models import CarMake, CarModel


def initiate():
    if CarMake.objects.count() > 0:
        return

    # Car makes
    ford = CarMake.objects.create(
        name="Ford",
        description="Ford is an American multinational automaker."
    )
    mercedes = CarMake.objects.create(
        name="Mercedes-Benz",
        description="Mercedes-Benz produces luxury vehicles and commercial vehicles."
    )
    audi = CarMake.objects.create(
        name="Audi",
        description="Audi is a German automotive manufacturer of luxury vehicles."
    )
    nissan = CarMake.objects.create(
        name="Nissan",
        description="Nissan is a Japanese multinational automobile manufacturer."
    )
    toyota = CarMake.objects.create(
        name="Toyota",
        description="Toyota is a Japanese multinational automotive manufacturer."
    )

    # Ford models
    CarModel.objects.create(car_make=ford, name="Mustang", dealer_id=1, type="Sedan", year=date(2020, 1, 1))
    CarModel.objects.create(car_make=ford, name="Explorer", dealer_id=2, type="SUV", year=date(2021, 1, 1))
    CarModel.objects.create(car_make=ford, name="F-150", dealer_id=3, type="Truck", year=date(2022, 1, 1))

    # Mercedes models
    CarModel.objects.create(car_make=mercedes, name="C-Class", dealer_id=4, type="Sedan", year=date(2020, 1, 1))
    CarModel.objects.create(car_make=mercedes, name="GLE", dealer_id=5, type="SUV", year=date(2021, 1, 1))
    CarModel.objects.create(car_make=mercedes, name="A-Class", dealer_id=6, type="Sedan", year=date(2022, 1, 1))

    # Audi models
    CarModel.objects.create(car_make=audi, name="A4", dealer_id=7, type="Sedan", year=date(2020, 1, 1))
    CarModel.objects.create(car_make=audi, name="Q7", dealer_id=8, type="SUV", year=date(2021, 1, 1))
    CarModel.objects.create(car_make=audi, name="A6", dealer_id=9, type="Sedan", year=date(2022, 1, 1))

    # Nissan models
    CarModel.objects.create(car_make=nissan, name="Altima", dealer_id=10, type="Sedan", year=date(2020, 1, 1))
    CarModel.objects.create(car_make=nissan, name="Rogue", dealer_id=11, type="SUV", year=date(2021, 1, 1))
    CarModel.objects.create(car_make=nissan, name="Sentra", dealer_id=12, type="Sedan", year=date(2022, 1, 1))

    # Toyota models
    CarModel.objects.create(car_make=toyota, name="Camry", dealer_id=13, type="Sedan", year=date(2020, 1, 1))
    CarModel.objects.create(car_make=toyota, name="RAV4", dealer_id=14, type="SUV", year=date(2021, 1, 1))
    CarModel.objects.create(car_make=toyota, name="Corolla", dealer_id=15, type="Sedan", year=date(2022, 1, 1))