import { configureStore } from "@reduxjs/toolkit";
import chessSlice from '../slice/chessSlice';

const chessStore = () => configureStore({
    reducer: {
        chess: chessSlice
    }
});

export default chessStore;