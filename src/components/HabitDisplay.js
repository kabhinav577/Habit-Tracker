import React from 'react';
import { useSelector } from 'react-redux';
import HabitDetails from './HabitDetails';

const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits);
  console.log(habits);
  return (
    <div className="w-full pt-16 text-white pr-16 md:px-16 md:pt-4 sm:w-[110%] sm:-ml-4">
      {habits.map((habit, i) => (
        <div
          className="mt-4 p-4 w-full  border border-gray-600 rounded-lg shadow gradient sm:p-3"
          key={i}
        >
          <div className="flex justify-between items-center">
            <p className="mb-2">
              <strong>{habit.title}</strong>:{' '}
              <i className="text-sm">{habit.description}</i>
            </p>
            <p className="text-slate-400 text-sm">{habit.date}</p>
          </div>

          <HabitDetails key={habit.title} habit={habit} />
        </div>
      ))}
    </div>
  );
};

export default HabitDisplay;
