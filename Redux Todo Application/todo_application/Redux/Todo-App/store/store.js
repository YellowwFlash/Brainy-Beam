import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slice/todoSlice'

const todoStore = () => configureStore({
    reducer: todoReducer
});

export default todoStore;