import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./reducers/counterSlice";

function App() {
  const { value } = useSelector((state) => state.counter);
  console.log(value);

  const dispatch = useDispatch();

  return (
    <>
      <div className=" p-10 mt-5 bg-red-100">
        <h1 className="text-2xl font-bold text-center text-red-900">
          Counter : {value}
        </h1>
      </div>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-blue-200 rounded-full mx-3 my-6 cursor-pointer border border-gray-500 font-medium"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 bg-red-200 rounded-full mx-3 my-6 cursor-pointer border border-gray-500 font-medium"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="px-4 py-2 bg-green-200 rounded-full mx-3 my-6 cursor-pointer border border-gray-500 font-medium"
      >
        Increment by 5
      </button>
    </>
  );
}

export default App;
