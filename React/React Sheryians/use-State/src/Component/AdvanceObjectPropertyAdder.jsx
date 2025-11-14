import React, { useState } from "react";

// Yeh jp uuse state hai voh state(array ya jo bhi element ho) , toh voh kya state ko turrant update nahi karta hai
// Voh state ko apne hisaab se function completion ke baad update karta hai
// Kyu ?? Kyunki to "fix performance issues"

//Toh fir humein directly changes nahi dikhengee but inspect krke components pe jaake dikh jaayenge
//Jo maine likha hai uske according bhi dikh jaayega gender JSON.stringify krke

function AdvanceObjectPropertyAdder() {
  const [data, setData] = useState({
    name: "Chetna",
    age: 22,
  });
  return (
    <div>
      <h3>Name : {data.name}</h3>
      <h3>Age : {data.age}</h3>
      <h3>{JSON.stringify(data)}</h3>
      <button
        onClick={() => {
          setData((prev) => ({
            ...prev,
            gender: "female",
          }));

          console.log(data);
        }}
      >
        Add the gender property
      </button>

      <h3>Gender : {data.gender}</h3>
    </div>
  );
}

export default AdvanceObjectPropertyAdder;
