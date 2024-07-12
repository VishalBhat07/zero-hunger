import React from "react";
import "./Footer.css";
// import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src alt="" /> */}
          <p>
            Experience the taste of nature with our Farm Fresh produce,
            carefully harvested to bring you the freshest flavors. From our
            fields to your table, we guarantee a delicious and healthy
            experience.
            <br />
            <br />
            Our farm fresh products are grown with love and care, ensuring a
            superior quality that you can trust. Nourish your body and soul with
            the goodness of our Farm Fresh produce, delivered right to your
            doorstep.
          </p>
          <div className="footer-social-icons">
            <a href="#">
              <img src="../../../public/icons8-facebook-circled.gif" alt="" />
            </a>
            <a href="#">
              <img src="../../../public/icons8-instagram.gif" alt="" />
            </a>
            <a href="#">
              <img src="../../../public/icons8-twitter.gif" alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7975806661</li>
            <li>contact@FreshFarm.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; FarmFresh.com - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
