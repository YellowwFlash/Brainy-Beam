import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    board: Array(8).fill(null).map((_, row) =>
        Array(8).fill(null).map((_, col) => (row + col) % 2 === 0 ? 'white' : 'black')
    )
}

const chessSlice = createSlice({
    name: 'chess',
    initialState,
    reducers: {
        toggleColor: (state, action) => {
            const { row, col } = action.payload;
            if (state.board[row][col] === 'white')
                state.board[row][col] = 'yellow';
            else if (state.board[row][col] === 'black')
                state.board[row][col] = 'red';
        }
    }
});

export const { toggleColor } = chessSlice.actions;
export default chessSlice.reducer;