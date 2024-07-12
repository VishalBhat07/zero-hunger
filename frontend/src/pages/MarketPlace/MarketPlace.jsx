import React, { useState } from "react";
import "./MarketPlace.css";

const Marketplace = () => {
  const usdToInr = 75;
  const poundsToKgs = 0.453592;

  const initialFarmers = [
    {
      id: 1,
      name: "Vishal Bhat",
      photo: "../../public/pfp1.jpg",
      crops: [
        { name: "Tomatoes", price: 2.5 * usdToInr, quantity: 100 * poundsToKgs },
        { name: "Cucumbers", price: 1.5 * usdToInr, quantity: 50 * poundsToKgs },
      ],
    },
    {
      id: 2,
      name: "Vineeth Rao",
      photo: "../../public/pfp2.jpg",
      crops: [
        { name: "Carrots", price: 1.0 * usdToInr, quantity: 200 * poundsToKgs },
        { name: "Broccoli", price: 3.0 * usdToInr, quantity: 150 * poundsToKgs },
      ],
    },
    {
      id: 3,
      name: "V S Sreenivaas",
      photo: "../../public/pfp3.jpg",
      crops: [
        { name: "Apples", price: 1.5 * usdToInr, quantity: 100 * poundsToKgs },
        { name: "Oranges", price: 2.0 * usdToInr, quantity: 50 * poundsToKgs },
      ],
    },
    {
      id: 4,
      name: "Sumedh Ududpa",
      photo: "../../public/pfp4.jpg",
      crops: [
        { name: "Potatoes", price: 0.5 * usdToInr, quantity: 200 * poundsToKgs },
        { name: "Onions", price: 1.0 * usdToInr, quantity: 150 * poundsToKgs },
      ],
    },
    {
      id: 5,
      name: "Yug Jain",
      photo: "../../public/pfp5.jpg",
      crops: [
        { name: "Peppers", price: 2.0 * usdToInr, quantity: 100 * poundsToKgs },
        { name: "Cucumbers", price: 1.5 * usdToInr, quantity: 50 * poundsToKgs },
      ],
    },
    {
      id: 6,
      name: "Sushanth Joshi",
      photo: "../../public/pfp6.jpg",
      crops: [
        { name: "Grapes", price: 3.0 * usdToInr, quantity: 200 * poundsToKgs },
        { name: "Strawberries", price: 2.5 * usdToInr, quantity: 150 * poundsToKgs },
      ],
    },
    {
      id: 7,
      name: "Tejasvi Hegde",
      photo: "../../public/pfp7.jpg",
      crops: [
        { name: "Pears", price: 1.5 * usdToInr, quantity: 100 * poundsToKgs },
        { name: "Peaches", price: 2.0 * usdToInr, quantity: 50 * poundsToKgs },
      ],
    },
    {
      id: 8,
      name: "Suprith G B",
      photo: "../../public/pfp8.jpg",
      crops: [
        { name: "Cherries", price: 3.5 * usdToInr, quantity: 200 * poundsToKgs },
        { name: "Plums", price: 2.5 * usdToInr, quantity: 150 * poundsToKgs },
      ],
    },
    {
      id: 9,
      name: "Tharun",
      photo: "../../public/pfp1.jpg",
      crops: [
        { name: "Mango", price: 8.5 * usdToInr, quantity: 200 * poundsToKgs },
        { name: "Plums", price: 2.5 * usdToInr, quantity: 450 * poundsToKgs },
      ],
    },
    {
      id: 10,
      name: "Yashwanth",
      photo: "../../public/pfp3.jpg",
      crops: [
        { name: "Apples", price: 6.5 * usdToInr, quantity: 200 * poundsToKgs },
        { name: "Guava", price: 4.5 * usdToInr, quantity: 250 * poundsToKgs },
      ],
    },
    {
      id: 11,
      name: "Aditya",
      photo: "../../public/pfp8.jpg",
      crops: [
        { name: "Peaches", price: 3.5 * usdToInr, quantity: 300 * poundsToKgs },
        { name: "Banana", price: 1.5 * usdToInr, quantity: 150 * poundsToKgs },
      ],
    },
    {
      id: 12,
      name: "Kushal Gowda",
      photo: "../../public/pfp3.jpg",
      crops: [
        { name: "Watermelons", price: 2.5 * usdToInr, quantity: 150 * poundsToKgs },
        { name: "Sitaphal", price: 3.5 * usdToInr, quantity: 50 * poundsToKgs },
      ],
    },
  ];

  // Function to add random crops to some farmers
  const addRandomCrops = (farmers) => {
    const additionalCrops = [
      { name: "Bananas", price: 1.0 * usdToInr, quantity: 100 * poundsToKgs },
      { name: "Lettuce", price: 1.2 * usdToInr, quantity: 60 * poundsToKgs },
      { name: "Spinach", price: 1.8 * usdToInr, quantity: 80 * poundsToKgs },
    ];

    return farmers.map((farmer) => {
      const shouldAddCrops = Math.random() > 0.5; // 50% chance to add extra crops
      if (shouldAddCrops) {
        const randomCrop = additionalCrops[Math.floor(Math.random() * additionalCrops.length)];
        return {
          ...farmer,
          crops: [...farmer.crops, randomCrop],
        };
      }
      return farmer;
    });
  };

  const [farmers, setFarmers] = useState(addRandomCrops(initialFarmers));
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFarmers = farmers.filter((farmer) =>
    farmer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for sellers..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="marketplace">
        {filteredFarmers.map((farmer) => (
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
                    <th>Price (INR)</th>
                    <th>Quantity (kg)</th>
                  </tr>
                </thead>
                <tbody>
                  {farmer.crops.map((crop) => (
                    <tr key={crop.name}>
                      <td>{crop.name}</td>
                      <td>₹{crop.price.toFixed(2)}</td>
                      <td>{crop.quantity.toFixed(2)}</td>
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
