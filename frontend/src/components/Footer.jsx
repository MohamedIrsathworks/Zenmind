import React from "react";
import "../styles/footer.css";

const Footer = () => (
  <div className="container-fluid">
    <footer>
      <div className="row">
        {/* Contact Us */}
        <div className="col-6 col-md-2 mb-1" style={{ margin: "0.5rem" }}>
          <h2 className="text-uppercase">Contact Us</h2>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <h6 className="p-0 text-body-secondary">
                admin@zenmind.health.in
              </h6>
            </li>
            <li className="nav-item mb-2">
              <h6 className="p-0 text-body-secondary">9876543210</h6>
            </li>
          </ul>
        </div>

        {/* Get Started */}
        <div className="col-6 col-md-2 mb-1" style={{ margin: "0.5rem" }}>
          <h2 className="text-uppercase">Get Started</h2>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/signup" className="nav-link p-0 text-body-secondary">
                <h6>Sign Up</h6>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/login" className="nav-link p-0 text-body-secondary">
                <h6>Login</h6>
              </a>
            </li>
          </ul>
        </div>

        {/* Support Hub */}
        <div className="col-6 col-md-2 mb-1" style={{ margin: "0.5rem" }}>
          <h2 className="text-uppercase">Support Hub</h2>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/gethelp" className="nav-link p-0 text-body-secondary">
                <h6>Get Help</h6>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/test" className="nav-link p-0 text-body-secondary">
                <h6>Take a Quiz</h6>
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="col-6 col-md-2 mb-1" style={{ margin: "0.5rem" }}>
          <h2 className="text-uppercase">Resources</h2>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/references" className="nav-link p-0 text-body-secondary">
                <h6>References</h6>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-center border-top mt-3 pt-3">
        <p className="text-center text-muted">&copy; 2025 ZenMind Health</p>
      </div>
    </footer>
  </div>
);

export default Footer;
