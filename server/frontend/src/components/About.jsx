import Header from "./Header/Header";

export default function About() {
  return (
    <div>
      <Header />

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
          <h1 style={{ marginBottom: "15px", fontWeight: "700" }}>About Us</h1>
          <p style={{ fontSize: "1.1rem", margin: "0 auto", maxWidth: "900px" }}>
            Welcome to Best Cars dealership, home to the best cars in North America.
            We deal in selling domestic and imported cars at reasonable prices.
          </p>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            padding: "30px 20px 40px",
            borderRadius: "0 0 12px 12px",
          }}
        >
          <div className="row g-4 justify-content-center">
            <div className="col-md-4 d-flex">
              <div
                className="card w-100"
                style={{
                  border: "none",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  height: "100%",
                }}
              >
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
                  alt="Michael Carter"
                  style={{ height: "280px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "6px" }}>
                    Michael Carter
                  </p>
                  <p style={{ color: "#17a2b8", fontWeight: "600", marginBottom: "12px" }}>
                    General Sales Manager
                  </p>
                  <p className="card-text">
                    Michael leads our sales team with more than 10 years of dealership experience.
                    He focuses on helping customers find reliable vehicles that match their needs and budget.
                  </p>
                  <p style={{ color: "#555", fontSize: "0.95rem", marginTop: "10px" }}>
                    michael.carter@bestcars.com
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex">
              <div
                className="card w-100"
                style={{
                  border: "none",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  height: "100%",
                }}
              >
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                  alt="Sophia Bennett"
                  style={{ height: "280px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "6px" }}>
                    Sophia Bennett
                  </p>
                  <p style={{ color: "#17a2b8", fontWeight: "600", marginBottom: "12px" }}>
                    Customer Relations Specialist
                  </p>
                  <p className="card-text">
                    Sophia ensures every customer enjoys a smooth and friendly buying experience.
                    She is passionate about answering questions clearly and building long-term trust.
                  </p>
                  <p style={{ color: "#555", fontSize: "0.95rem", marginTop: "10px" }}>
                    sophia.bennett@bestcars.com
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex">
              <div
                className="card w-100"
                style={{
                  border: "none",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  height: "100%",
                }}
              >
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
                  alt="Daniel Brooks"
                  style={{ height: "280px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "6px" }}>
                    Daniel Brooks
                  </p>
                  <p style={{ color: "#17a2b8", fontWeight: "600", marginBottom: "12px" }}>
                    Inventory and Finance Consultant
                  </p>
                  <p className="card-text">
                    Daniel manages inventory planning and helps customers explore practical financing options.
                    He works to make the car-buying process straightforward and transparent.
                  </p>
                  <p style={{ color: "#555", fontSize: "0.95rem", marginTop: "10px" }}>
                    daniel.brooks@bestcars.com
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