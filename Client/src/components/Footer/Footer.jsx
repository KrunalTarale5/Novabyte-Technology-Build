import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Legal from "../Legal/Legal";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

// import twitter from '../assets/x-twitter.svg';

// import Cookie from '../Cookie/Cookie';

// import whitelogo from "../assets/white_logo.svg"

import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();



  const [email, setEmail] = useState("");
  // const [status, setStatus] = useState("");



  return (
    <footer className="bg-light text-dark py-4 border-top">
      {/* <img src={whitelogo} style={{ display: 'none' }} alt="demo logo" />*/}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 sub_container">
            <h3 className="mb-3 ">NovaByte</h3>
            <p className="mb-3">
            Select topics and stay current with our latest insights
            </p>
            <p>{status}</p>
            <div className="input-group" id="subscribe">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          <div className="col-lg-6 text-lg-end">
            <div className="d-flex justify-content-center justify-content-lg-end mb-3">
              <Link to="/about" className="text-decoration-none me-3">
                About Us
              </Link>
              <Link to="/faq" className="text-decoration-none me-3">
                FAQ
              </Link>
              <Link to="/privacyPolicy" className="text-decoration-none me-3">
                Privacy Policy
              </Link>
              <Link to="/legal" className="text-decoration-none me-3">
                Legal
              </Link>
              <Link
                to="/termsandcondition"
                className="text-decoration-none me-3"
              >
                T&C
              </Link>
            </div>
            <div className="d-flex justify-content-center justify-content-lg-end">
              <a
                href=""
                className="text-secondary me-3"
                target="blank"
              >
                <img
                  src="https://aiproff.ai/dist/assets/x-twitter-d8f35a67.svg"
                  alt="Twitter Icon"
                  style={{ width: "24px", height: "24px" }}
                />
              </a>
              <a
                href=""
                className="text-secondary me-3"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  style={{ color: "#303030" }}
                />
              </a>
              <a
                href=""
                className="text-secondary me-3"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="lg"
                  style={{ color: "#2e2e2e" }}
                />
              </a>
              <a href="#" className="text-secondary me-3">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  style={{ color: "#3d3d3d" }}
                />
              </a>
              <a
                href=""
                target="blank"
                className="text-secondary"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="lg"
                  style={{ color: "#3d3d3d" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 border-top pt-3">
          <p className="text-center text-secondary">
            &copy; {currentYear} NovaByte Software Consulting Private Limited
          </p>
        </div>
      </div>

      {/* Modal */}
     
    </footer>
  );
};

export default Footer;
