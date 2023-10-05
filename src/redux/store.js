import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from './features/habitSlices';

const store = configureStore({
  reducer: {
    allHabits: habitsReducer,
  },
});

export default store;
