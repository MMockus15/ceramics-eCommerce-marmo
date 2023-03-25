import React from "react";

const Footer = () => {
  return (
    <>
      <footer 
          style={{
            backgroundColor: "#E6D8B6",
            color: "#4C4C4C",
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "fantasy",
            fontSize: "18px",
          }}
        >
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">
              Made with ❤️ by{" "}
              <a
                href="https://mmockus15.github.io/mmockus-professional-portfolio/"
                // className="text-dark fs-5"
                target="_blank"
                rel="noreferrer"
              >
                MarMo
              </a>
            </p>
            <a
              // className="text-dark fs-4"
              href="https://github.com/MMockus15"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
      </footer>
    </>
  );
};

export default Footer;
