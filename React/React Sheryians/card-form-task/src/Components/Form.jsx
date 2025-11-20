import React from 'react'
import { useForm } from 'react-hook-form';

function Form({ handleFormSubmit }) {
  const { register, handleSubmit, reset } = useForm({ activity: "", place: "", image: "" });

  const onSubmit = (data) => {
    handleFormSubmit(data);
    reset();
  };

  return (
    <div className="mt-10 flex justify-center">
      <form
        className="p-8 bg-white rounded-xl shadow-2xl w-full max-w-md border border-gray-100"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Activity</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Activity Name</label>
            <input
              {...register("activity")}
              type="text"
              placeholder="e.g., Hiking"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              {...register("place")}
              type="text"
              placeholder="e.g., McLeodganj"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              {...register("image")}
              type="text"
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform active:scale-95"
          >
            Add Card
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
