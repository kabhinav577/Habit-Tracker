import React, { useState } from 'react';
import { deleteHabit } from '../redux/features/habitSlices';
import { useDispatch, useSelector } from 'react-redux';
import CreateHabit from './CreateHabit';

const OverView = () => {
  // For Showing Modal when clicked for creating new Habit
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  // Storing All Habits from Redux state
  const { habits } = useSelector((state) => state.allHabits);

  // Delete Function using Dispatch
  const deleteHandler = (title) => {
    dispatch(deleteHabit(title));
  };

  return (
    <>
      <div className="w-full mx-auto flex flex-col pl-16 pt-8 text-white gap-4 md:px-16 md:pt-6 sm:w-[110%] sm:-ml-4">
        <div className="flex justify-start items-start gap-4 ml-1">
          <div className="text-2xl">
            <i className="fa-regular fa-calendar-minus"></i>
          </div>
          <div className="text-2xl">Habits</div>
        </div>
        {/* Showing Habit List  */}
        {habits.map((habit, i) => (
          <div
            className="p-3 w-full flex justify-between items-center bg-gray-800 border border-gray-600 rounded-lg shadow"
            key={i}
          >
            <div className="flex flex-col justify-start items-start">
              <i className="fa-solid fa-feather-pointed"></i>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {habit.title}
              </h5>
            </div>

            <div
              className="self-center mt-4 font-normal cursor-pointer text-gray-400 hover:text-red-400"
              onClick={() => deleteHandler(habit.title)}
            >
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        ))}

        {/* Modal Show Button  */}
        <div className="flex justify-end items-center">
          <button
            type="button"
            className="border bg-gray-800 border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 font-medium rounded-lg text-sm px-3 py-2 hover:bg-gray-700"
            onClick={() => setModalShow(true)}
          >
            <i className="fa-solid fa-circle-plus mr-2"></i>
            New Habit
          </button>
          <CreateHabit show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </>
  );
};

export default OverView;
