import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="resources">
      <div className="hero">
        <h1>Resources</h1>
        <p>
          Learn about good farming practices, choice of seeds, irrigation
          methods, and more
        </p>
      </div>
      <div className="card-grid">
        <div className="card">
          <h2>Good Farming Practices</h2>
          <ul>
            <li>
              <a href="#">Crop Rotation: A Guide to Improving Soil Health</a>
            </li>
            <li>
              <a href="#">
                The Importance of Organic Farming: Benefits and Challenges
              </a>
            </li>
            <li>
              <a href="#">
                Integrated Pest Management (IPM): A Sustainable Approach
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Choice of Seeds</h2>
          <ul>
            <li>
              <a href="#">
                Selecting the Right Seeds for Your Climate and Soil Type
              </a>
            </li>
            <li>
              <a href="#">
                The Benefits of Hybrid Seeds: Increased Yields and Disease
                Resistance
              </a>
            </li>
            <li>
              <a href="#">
                Open-Pollinated Seeds: Preserving Biodiversity and Food Security
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Irrigation Methods</h2>
          <ul>
            <li>
              <a href="#">
                Drip Irrigation: A Water-Efficient Solution for Farmers
              </a>
            </li>
            <li>
              <a href="#">
                Sprinkler Irrigation: A Cost-Effective Option for Large Farms
              </a>
            </li>
            <li>
              <a href="#">
                Rainwater Harvesting: A Sustainable Approach to Irrigation
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Pest and Disease Management</h2>
          <ul>
            <li>
              <a href="#">
                Identifying and Managing Common Pests and Diseases in Crops
              </a>
            </li>
            <li>
              <a href="#">Organic Pest Control Methods: A Guide for Farmers</a>
            </li>
            <li>
              <a href="#">
                Integrated Pest Management (IPM): A Holistic Approach
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Soil Health and Fertility</h2>
          <ul>
            <li>
              <a href="#">
                Understanding Soil pH and Its Impact on Crop Growth
              </a>
            </li>
            <li>
              <a href="#">
                The Importance of Soil Organic Matter: Improving Soil Structure
                and Fertility
              </a>
            </li>
            <li>
              <a href="#">
                Using Cover Crops to Enhance Soil Health and Reduce Erosion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
