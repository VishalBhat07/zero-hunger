import React, { useState } from "react";
import "./MarketPlace.css";

const Marketplace = () => {
  const [farmers, setFarmers] = useState([
    {
      id: 1,
      name: "Vishal Bhat",
      photo: "../../public/pfp1.jpg",
      crops: [
        { name: "Tomatoes", price: 2.5, quantity: 100 },
        { name: "Cucumbers", price: 1.5, quantity: 50 },
      ],
    },
    {
      id: 2,
      name: "Vineeth Rao",
      photo: "../../public/pfp2.jpg",
      crops: [
        { name: "Carrots", price: 1.0, quantity: 200 },
        { name: "Broccoli", price: 3.0, quantity: 150 },
      ],
    },
    {
      id: 3,
      name: "V S Sreenivaas",
      photo: "../../public/pfp3.jpg",
      crops: [
        { name: "Apples", price: 1.5, quantity: 100 },
        { name: "Oranges", price: 2.0, quantity: 50 },
      ],
    },
    {
      id: 4,
      name: "Sumedh Ududpa",
      photo: "../../public/pfp4.jpg",
      crops: [
        { name: "Potatoes", price: 0.5, quantity: 200 },
        { name: "Onions", price: 1.0, quantity: 150 },
      ],
    },
    {
      id: 5,
      name: "Yug Jain",
      photo: "../../public/pfp5.jpg",
      crops: [
        { name: "Peppers", price: 2.0, quantity: 100 },
        { name: "Cucumbers", price: 1.5, quantity: 50 },
      ],
    },
    {
      id: 6,
      name: "Sushanth Joshi",
      photo: "../../public/pfp6.jpg",
      crops: [
        { name: "Grapes", price: 3.0, quantity: 200 },
        { name: "Strawberries", price: 2.5, quantity: 150 },
      ],
    },
    {
      id: 7,
      name: "Tejasvi Hegde",
      photo: "../../public/pfp7.jpg",
      crops: [
        { name: "Pears", price: 1.5, quantity: 100 },
        { name: "Peaches", price: 2.0, quantity: 50 },
      ],
    },
    {
      id: 8,
      name: "Suprith G B",
      photo: "../../public/pfp8.jpg",
      crops: [
        { name: "Cherries", price: 3.5, quantity: 200 },
        { name: "Plums", price: 2.5, quantity: 150 },
      ],
    },
  ]);

  return (
    <>
      <div className="about-us">
        <div className="hero">
          <h1>Market Place</h1>
          <p>
            Welcome to our marketplace, where we connect farmers with customers
            who care about fresh, locally grown produce.
          </p>
        </div>
      </div>
      <div className="marketplace">
        {farmers.map((farmer) => (
          <div key={farmer.id} className="farmer-card">
            <img
              src={farmer.photo}
              alt={farmer.name}
              className="farmer-photo"
            />
            <h2>{farmer.name}</h2>
            <div className="crops">
              <table>
                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {farmer.crops.map((crop) => (
                    <tr key={crop.name}>
                      <td>{crop.name}</td>
                      <td>${crop.price}</td>
                      <td>{crop.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Marketplace;
