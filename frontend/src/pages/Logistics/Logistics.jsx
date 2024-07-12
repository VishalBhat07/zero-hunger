import React from "react";
import "./Logistics.css"

const Logistics = () => {
  return (
    <div className="logistics">
      <div className="hero">
        <h1>Logistics</h1>
        <p>Get your fresh produce delivered right to your doorstep</p>
      </div>
      <div className="section">
        <h2>Delivery Areas</h2>
        <ul>
          <li>Rajarajeshwari Nagar, Bengaluru</li>
          <li>Deepanjali Nagar, Bengaluru</li>
          <li>Pattanegere, Bengaluru</li>
          <li>Surathkal, Mangaluru</li>
          <li>More areas coming soon!</li>
        </ul>
      </div>
      <div className="section">
        <h2>Delivery Options</h2>
        <div className="delivery-options">
          <div className="option">
            <h3>Standard Delivery</h3>
            <p>₹250 flat rate, 2-3 business days</p>
          </div>
          <div className="option">
            <h3>Express Delivery</h3>
            <p>₹400 flat rate, 1 business day</p>
          </div>
          <div className="option">
            <h3>Pickup at Farm</h3>
            <p>Free, available at select farms</p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Order Tracking</h2>
        <p>
          Track your order from farm to table with our real-time tracking system
        </p>
      </div>
      <div className="section">
        <h2>Return Policy</h2>
        <p>
          If you're not satisfied with your order, we offer a 100% money-back
          guarantee
        </p>
      </div>
    </div>
  );
};

export default Logistics;
