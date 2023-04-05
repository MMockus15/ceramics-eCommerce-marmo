import React from "react";


const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <h4>Follow Us</h4>
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/marla.mockus" className="me-3 text-decoration-none">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com/MarlaMockus" className="me-3 text-decoration-none">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/_marmo/" className="me-3 text-decoration-none">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <h4>Contact Us</h4>
            <p>1234 Main Street, Anytown USA</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="col-md-4 text-center">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod elit sed ligula pretium, a ultrices magna sagittis. Integer ultricies, mi in bibendum dapibus, lacus dui tristique ex, vitae eleifend felis velit id ante.</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 text-center">
            <p>Made with ❤️ by <a href="https://mmockus15.github.io/mmockus-professional-portfolio/" className="text-light text-decoration-underline" target="_blank" rel="noreferrer">MarMo</a></p>
          </div>
        </div>
      </div>
      <style>
        {`
        @media (max-width: 576px) {
          .footer-links {
            display: flex;
            flex-direction: column;
          }
        }
        `}
      </style>
    </footer>
  );
};

export default Footer;
