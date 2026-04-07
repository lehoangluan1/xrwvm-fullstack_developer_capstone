export default function About() {
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
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/about">
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
  
        <div style={{ width: "85%", margin: "40px auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #20c997, #17a2b8)",
              color: "white",
              padding: "40px 30px",
              borderRadius: "12px 12px 0 0",
              textAlign: "center",
            }}
          >
            <h1>About Us</h1>
            <p>
              Welcome to Best Cars dealership, home to the best cars in North America.
              We deal in selling domestic and imported cars at reasonable prices.
            </p>
          </div>
  
          <div style={{ background: "#f8f9fa", padding: "30px", borderRadius: "0 0 12px 12px" }}>
            <p>
              We are committed to helping customers find the right vehicle with transparent pricing,
              trusted service, and a smooth buying experience.
            </p>
          </div>
        </div>
      </div>
    );
  }