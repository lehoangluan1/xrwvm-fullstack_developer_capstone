export default function Home() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "darkturquoise", minHeight: "1in" }}
        >
          <div className="container-fluid">
            <h2 style={{ paddingRight: "5%" }}>Dealerships</h2>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="card"
            style={{ width: "50%", marginTop: "50px", alignSelf: "center" }}
          >
            <img src="/static/car_dealership.jpg" className="card-img-top" alt="Dealership" />
            <div className="banner">
              <h5>Welcome to our Dealerships!</h5>
              <a href="/dealers" className="btn" style={{ backgroundColor: "aqua", margin: "10px" }}>
                View Dealerships
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }