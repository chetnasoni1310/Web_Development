import React, { useContext } from "react";
import { UserContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const x = useContext(UserContext);
  const { user } = x;
  
  const navigate = useNavigate();

  console.log(user[id]);

  return (
    <>
      <div className="w-1/2 text-center bg-red-100 m-auto mt-4 flex gap-4 justify-center text-xl">
        <h1>{user[id].name}</h1>
        <h1>{user[id].city}</h1>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-300 rounded-full px-6 py-2 text-white ml-30 mt-10 text-xl font-semibold"
      >
        Go back 🔙
      </button>
    </>
  );
}

export default UserDetails;
