import React, { useRef, useEffect } from "react";
import "./Logistics.css";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import L from "leaflet"; // Import Leaflet

const locations = [
  { lat: 12.9716, lng: 77.5946 }, // Example location (Bengaluru)
  { lat: 12.9748, lng: 77.6689 }, // Example location (Bengaluru)
  { lat: 13.325, lng: 74.7768 }, // Example location (Mangaluru)
];

const DeliveryMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current, { zoomControl: false }); // Create map instance

    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // OpenStreetMap tiles
    const attribution =
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileLayer = L.tileLayer(tileUrl, { attribution }); // Tile layer

    map.setView([13.0827, 77.5667], 12); // Set center coordinates and zoom level
    tileLayer.addTo(map); // Add tile layer to map

    locations.forEach((location) => {
      const marker = L.marker(location); // Create marker for each location
      const popup = L.popup().setContent(`Delivery Area`); // Popup content

      marker.addTo(map).bindPopup(popup); // Add marker and popup to map
    });

    return () => map.remove(); // Cleanup map on component unmount
  }, []); // Empty dependency array to ensure this effect runs only once

  return <div id="delivery-map" ref={mapRef} className="delivery-map"></div>;
};

const Logistics = () => {
  return (
    <div className="logistics">
      <header className="hero">
        <h1>Logistics</h1>
        <p>Get your fresh produce delivered right to your doorstep.</p>
        <div className="delivery-info">
          <span>Starting at ₹250</span>  
          <span>Delivery in 1-3 business days</span>
        </div>
      </header>
      <main className="content">
        <section className="delivery-areas">
          <h2>Delivery Areas</h2>
          <div className="flexi">
            <ul className="delivery-list">
              <li>Rajarajeshwari Nagar, Bengaluru</li>
              <li>Deepanjali Nagar, Bengaluru</li>
              <li>Pattanegere, Bengaluru</li>
              <li>Surathkal, Mangaluru</li>
              <li>More areas coming soon!</li>
            </ul>
            <DeliveryMap />
          </div>
          <button className="check-availability">Check Availability</button>
        </section>
        <section className="delivery-options">
          <h2>Delivery Options</h2>
          <div className="options-grid">
            <div className="option standard">
              <h3>Standard Delivery</h3>
              <p>₹250 flat rate, 2-3 business days</p>
            </div>
            <div className="option express">
              <h3>Express Delivery</h3>
              <p>₹400 flat rate, 1 business day</p>
            </div>
            <div className="option pickup">
              <h3>Pickup at Farm</h3>
              <p>Free, available at select farms (See Locations)</p>
            </div>
          </div>
        </section>
        <section className="order-tracking">
          <h2>Order Tracking</h2>
          <p>
            Track your order from farm to table with our real-time tracking
            system. Enter your order number below:
          </p>
          <div className="tracking-form">
            <input type="text" placeholder="Enter your order number" />
            <button type="submit">Track Now</button>
          </div>
        </section>
        <section className="return-policy">
          <h2>Return Policy</h2>
          <p>
            If you're not satisfied with your order, we offer a 100% money-back
          </p>
          <a href="#">Learn More</a>
        </section>
      </main>
    </div>
  );
};

export default Logistics;
