import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us">
      <div className="hero">
        <h1>About Us</h1>
        <p>
          Welcome to our marketplace, where we connect farmers with customers
          who care about fresh, locally grown produce.
        </p>
      </div>
      <div className="section">
        <h2>Our Mission</h2>
        <p>
          At <b>FarmFresh </b>, our mission is to revolutionize the way people
          access fresh, locally grown produce. We believe that everyone deserves
          to eat healthy, sustainable food that's good for their bodies and
          their communities. That's why we're dedicated to creating a platform
          that connects consumers with local farmers, promoting transparency,
          fairness, and environmental stewardship. By empowering farmers to sell
          their produce directly to customers, we aim to build a more equitable
          and resilient food system that benefits everyone involved. Join us in
          our mission to grow a healthier, more sustainable food future - one
          delicious, locally sourced meal at a time
        </p>
      </div>
      <div className="section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="../../../public/pfp1.jpg" alt="John Doe" />
            <h3>Sumedh Udupa</h3>
            <p>Team Lead</p>
          </div>
          <div className="team-member">
            <img src="../../../public/pfp2.jpg" alt="John Doe" />
            <h3>Vishal Bhat</h3>
            <p>Member </p>
          </div>
          <div className="team-member">
            <img src="../../../public/pfp3.jpg" alt="John Doe" />
            <h3>V S Sreenivaas</h3>
            <p>Member</p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Get in Touch</h2>
        <p>
          Have a question or want to learn more about our marketplace? Contact
          us at{" "}
          <a href="mailto:sumedhu.cs23@rvce.edu.in">sumedhu.cs23@rvce.edu.in</a>
        </p>
      </div>
    </div>
  );
};

export default About;
