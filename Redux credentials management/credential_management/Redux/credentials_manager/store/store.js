// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/crendentialsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;