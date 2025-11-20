import React from "react";


function Card({ cardIndex, values, onBookClick }) {
  const { image, activity, place, isBooked } = values;

  return (
    <div className="card w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="image h-48 overflow-hidden">
        <img
          src={image}
          alt={activity}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="content p-5 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">{activity}</h1>
        <h4 className="text-sm text-gray-500 font-medium uppercase tracking-wide">{place}</h4>
        
        <button
          onClick={() => onBookClick(cardIndex)}
          className={`mt-6 px-6 py-2.5 w-full rounded-lg font-semibold text-white shadow-md transition-all duration-300 ${
            isBooked
              ? "bg-green-500 hover:bg-green-600 cursor-default"
              : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg active:scale-95"
          }`}
        >
          {isBooked ? "Booked" : "Book Now"}
        </button>
      </div>
    </div>
  );
}

export default Card;
