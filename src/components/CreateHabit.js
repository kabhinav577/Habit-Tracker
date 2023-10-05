import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit, details } from '../redux/features/habitSlices';

const CreateHabit = ({ onHide, show }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  // Handle new Habits form
  const addHabitHandler = () => {
    dispatch(addHabit({ title, description, date, details }));
    onHide();
  };

  // close the model when click outside of div
  const handleClose = (e) => {
    if (e.target.id === 'wrapper') {
      onHide();
    }
  };

  // if Show == false don't do anything return null
  if (!show) {
    return null;
  }
  return (
    <div
      className="fixed inset-0  bg-gray-800 bg-opacity-25 backdrop-blur-sm flex justify-center text-white"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-1/2 md:w-2/3 sm:w-3/4 p-2 rounded flex flex-col">
        <div className="mt-20 p-2 bg-white rounded  text-gray-900">
          <div className="p-6 text-left">
            <div className="flex justify-between items-center">
              <h3 className="mb-2 text-2xl font-semibold text-gray-600">
                Add new Habit
              </h3>
              <div
                className="mb-2 text-2xl font-semibold text-red-500 cursor-pointer"
                onClick={onHide}
              >
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <hr />
            <form className="mt-2 space-y-6">
              <div>
                {/* title input*/}
                <label className="text-xl font-medium">Title:</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                  className="bg-gray-50 border border-gray-300 text-base rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 mt-2"
                  placeholder="Enter title"
                  required
                ></input>
              </div>
              <div>
                {/* description input */}
                <label className="text-xl font-medium">Description:</label>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  name="title"
                  className="bg-gray-50 border border-gray-300 text-base rounded-lg
              focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 mt-2"
                  placeholder="shortly describe"
                ></input>
              </div>
              <div>
                {/* date input */}
                <label className="text-xl font-medium">Date:</label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  name="date"
                  className="bg-gray-50 w-1/3 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 mt-2 ml-2 md:1/2 sm:w-full sm:ml-0"
                ></input>
              </div>

              <div className="flex justify-end">
                {/* close button */}
                <button
                  onClick={onHide}
                  className="text-white text-center  bg-red-400 hover:bg-red-900
                 focus:ring-4 focus:outline-none rounded-lg px-5 py-2.5 mr-2"
                >
                  Close
                </button>
                {/* add habit button */}
                <button
                  onClick={addHabitHandler}
                  type="submit"
                  className="text-white text-center  bg-blue-400 hover:bg-blue-900
                 focus:ring-4 focus:outline-none rounded-lg px-5 py-2.5"
                >
                  Add Habit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHabit;
