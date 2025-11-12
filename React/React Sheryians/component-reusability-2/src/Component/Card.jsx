import React from "react";
import "./card.css";

function Card() {
  //Ab humein card bnana hai toh fir hum kya karenge ki usmai jo jo data chahiye hota hai usko return ke bahar rakh denge
  //So we will make a const array data and in that array we will keep objects there with fields as card components
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      name: "Housing",
      description:
        "Would you like me to show you how to animate that color change smoothly (with CSS transitions or Tailwind’s transition-colors)? ",
      inStock: true,
    },

    {
      image:
        "https://images.unsplash.com/photo-1762779943612-02464f850c54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
      name: "Pent House",
      description:
        "like me to show you how to animate that color change smoothly (with CSS transitions or Tailwind’s",
      inStock: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1762117869403-6e40adbf9240?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      name: "Owl",
      description:
        "like me to show you how to animate that color change",
      inStock: true,
    },
  ];
  return (
    <>
      <div className="container">
        {data.map((elem, index) => (
          <div key={index} className="card">
            <div className="image">
              <img src={elem.image} alt={elem.name} />
            </div>
            <div className="card-content">
              <div className="heading">
                <h1>{elem.name}</h1>
              </div>
              <div className="description">
                <h3>{elem.description}</h3>
              </div>
            </div>
            <div className={`renderingButton ${ elem.inStock ? 'inStock' : 'outOfStock' }`}>
              <div className="button">
                <h4>{ elem.inStock ? 'In stock' : 'Out of stock'}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
