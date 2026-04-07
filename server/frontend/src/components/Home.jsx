import Header from "./Header/Header";
import dealershipImage from "./assets/car_dealership.jpg";

export default function Home() {
  return (
    <div>
      <Header />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="card"
          style={{ width: "50%", marginTop: "50px", alignSelf: "center" }}
        >
          <img
            src={dealershipImage}
            className="card-img-top"
            alt="Dealership"
          />
          <div className="banner">
            <h5>Welcome to our Dealerships!</h5>
            <a
              href="/dealers"
              className="btn"
              style={{ backgroundColor: "aqua", margin: "10px" }}
            >
              View Dealerships
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}