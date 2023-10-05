import React from 'react';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../redux/features/habitSlices';

const HabitDetails = ({ habit, habit: { details } }) => {
  const dispatch = useDispatch();

  // Function for Handling change status none -> done on click
  const checkStatusHandler = (arr) => {
    dispatch(
      changeStatus({
        title: arr[0],
        details: [{ day: arr[1], status: 'done' }],
      })
    );
  };

  // Function for handling change status done -> fail on Click
  const doneStatusHandler = (arr) => {
    dispatch(
      changeStatus({
        title: arr[0],
        details: [{ day: arr[1], status: 'fail' }],
      })
    );
  };

  // Function for handling change Status fail -> none on Click
  const failStatusHandler = (arr) => {
    dispatch(
      changeStatus({
        title: arr[0],
        details: [{ day: arr[1], status: 'none' }],
      })
    );
  };
  return (
    <div className="grid grid-flow-col">
      {details.map((detail) => (
        <div className="flex flex-col">
          <p className="text-slate-300">{detail.day}</p>
          <span className="ml-1">
            {detail.status === 'none' && (
              <i
                className="fa-solid fa-check"
                onClick={() => checkStatusHandler([habit.title, detail.day])}
              ></i>
            )}

            {detail.status === 'done' && (
              <i
                className=" fa-lg fa-solid fa-circle-check text-green-500"
                onClick={() => doneStatusHandler([habit.title, detail.day])}
              ></i>
            )}

            {detail.status === 'fail' && (
              <i
                className=" fa-lg fa-solid fa-circle-xmark text-red-500"
                onClick={() => failStatusHandler([habit.title, detail.day])}
              ></i>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HabitDetails;
