// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Welcome to FarmFresh</h1>
        <p>Where fresh meets quality</p>
        <div className="crops">
          <img className="crop-image" src="../../public/crop1.jpg" alt="" />
          <img className="crop-image" src="../../public/crop2.jpg" alt="" />
          <img className="crop-image" src="../../public/crop3.jpg" alt="" />
        </div>
        <Link to="/MarketPlace">
          <button className="btn">Explore Our Crops</button>
        </Link>
      </header>
      <section className="features">
        <h2>Our Features</h2>
        <ul>
          <li>
            <i className="fas fa-seedling"></i>
            <h3>High-Quality Seeds</h3>
            <p>
              We use only the best seeds to ensure maximum yield and quality.
            </p>
          </li>
          <li>
            <i className="fas fa-water"></i>
            <h3>Efficient Irrigation</h3>
            <p>
              We use advanced irrigation systems to conserve water and reduce
              waste.
            </p>
          </li>
          <li>
            <i className="fas fa-tractor"></i>
            <h3>Modern Farming Techniques</h3>
            <p>
              We use the latest farming techniques to ensure maximum efficiency
              and productivity.
            </p>
          </li>
        </ul>
      </section>
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <blockquote>
          <p>
            FarmFresh has been a game-changer for our business. Their
            high-quality crops have increased our yields and profits.
          </p>
          <cite>John Doe, Happy Farmer</cite>
        </blockquote>
        <blockquote>
          <p>
            We've been working with FarmFresh for years and have always been
            impressed with their commitment to quality and customer service.
          </p>
          <cite>Jane Doe, Satisfied Customer</cite>
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
