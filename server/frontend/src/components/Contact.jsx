import Header from "../Header/Header";

export default function Contact() {
  return (
    <div>
      <Header />

      {isLoggedIn && (
        <h2 style={{ marginLeft: "20px", marginTop: "20px" }}>
          Welcome, {loggedInUser}
        </h2>
      )}

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
          <h1 style={{ marginBottom: "12px", fontWeight: "700" }}>Contact Us</h1>
          <p>
            We are here to help you find the right vehicle and answer any questions
            about our dealership, financing options, and available inventory.
          </p>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            padding: "30px",
            borderRadius: "0 0 12px 12px",
          }}
        >
          <div className="row g-4 align-items-stretch">
            <div className="col-md-5">
              <div
                className="card h-100"
                style={{
                  border: "none",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                  alt="Customer support representative"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "360px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <div className="col-md-7">
              <div
                className="card h-100"
                style={{
                  border: "none",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="card-body p-4">
                  <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>
                    Best Cars Dealership
                  </h3>

                  <p>
                    Reach out to our team for vehicle inquiries, test drive appointments,
                    pricing details, and after-sales support.
                  </p>

                  <p><span style={{ fontWeight: "700", color: "#17a2b8" }}>Address:</span> 1250 Auto Drive, Dallas, TX 75201, USA</p>
                  <p><span style={{ fontWeight: "700", color: "#17a2b8" }}>Phone:</span> +1 (214) 555-0187</p>
                  <p><span style={{ fontWeight: "700", color: "#17a2b8" }}>Email:</span> support@bestcars.com</p>
                  <p><span style={{ fontWeight: "700", color: "#17a2b8" }}>Sales Hours:</span> Monday - Saturday, 9:00 AM - 7:00 PM</p>
                  <p><span style={{ fontWeight: "700", color: "#17a2b8" }}>Service Hours:</span> Monday - Friday, 8:00 AM - 6:00 PM</p>
                  <p><span style={{ fontWeight: "700", color: "#17a2b8" }}>Customer Support Lead:</span> Emily Johnson</p>

                  <hr />

                  <p>
                    Whether you are looking for a domestic sedan, an imported SUV,
                    or financing guidance, our dealership team is ready to assist you
                    with professional and friendly service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}