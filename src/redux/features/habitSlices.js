import { createSlice } from '@reduxjs/toolkit';

export const details = [
  { day: 'Mon', status: 'none' },
  { day: 'Tue', status: 'none' },
  { day: 'Wed', status: 'none' },
  { day: 'Thu', status: 'none' },
  { day: 'Fri', status: 'none' },
  { day: 'Sat', status: 'none' },
  { day: 'Sun', status: 'none' },
];

/* load Habits from localStorage if there are any */
const habitsFromStorage = localStorage.getItem('newHabits')
  ? JSON.parse(localStorage.getItem('newHabits'))
  : [
      {
        title: 'Early bird',
        description: 'Wake up at 4:00AM',
        date: '2023-10-3',
        details,
      },
    ];

// Creating Habits Array
let habits = [...habitsFromStorage];

const initialState = {
  habits: habits,
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    // ADD :: Habit Reducer
    addHabit: (state, { payload }) => {
      state.habits = [...state.habits, payload];
      habits = [...habits, payload];
      localStorage.setItem('newHabits', JSON.stringify(habits));
    },
    // DELETE :: Habit Reducer
    deleteHabit: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.title !== action.payload
      );
      localStorage.setItem('newHabits', JSON.stringify(state.habits));
    },
    // UPDATE STATUS :: Habit Reducer
    changeStatus: (state, { payload }) => {
      state.habits.forEach((habit) => {
        if (habit.title === payload.title) {
          habit.details.forEach((detail) => {
            if (detail.day === payload.details[0].day) {
              detail.status = payload.details[0].status;
            }
          });
        }
      });
      localStorage.setItem('newHabits', JSON.stringify(state.habits));
    },
  },
});

export const { addHabit, deleteHabit, changeStatus } = habitsSlice.actions;

export default habitsSlice.reducer;
