import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "Complete Homework", task_description: "Finish the math homework and submit it by tomorrow.", date: "2024-12-17", isMarked: false },
    { id: 2, title: "Prepare for Meeting", task_description: "Prepare the presentation slides for the upcoming client meeting.", date: "2024-12-18", isMarked: false },
    { id: 3, title: "Buy Groceries", task_description: "Get milk, eggs, and fresh vegetables from the supermarket.", date: "2024-12-19", isMarked: false },
    { id: 4, title: "Write Blog Post", task_description: "Write a blog post on the benefits of learning JavaScript.", date: "2024-12-20", isMarked: false },
    { id: 5, title: "Fix Bug in Code", task_description: "Resolve the issue causing the login form to not submit.", date: "2024-12-21", isMarked: false },
    { id: 6, title: "Clean the House", task_description: "Vacuum the floors and organize the living room.", date: "2024-12-22", isMarked: false },
    { id: 7, title: "Send Emails", task_description: "Reply to all pending emails in the inbox and follow up with clients.", date: "2024-12-23", isMarked: false },
    { id: 8, title: "Plan Weekend Trip", task_description: "Research and plan a weekend getaway to the mountains.", date: "2024-12-24", isMarked: false }
];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask(state, action) {
            const todo = {
                id: state.length + 1,
                ...action.payload,
                isMarked: false
            };
            return [...state, todo];
        },
        removeTask(state, action) {
            return state.filter(task => task.id !== action.payload);
        },
        markTask(state, action) {
            return state.map(task =>
                task.id === action.payload ? { ...task, isMarked: !task.isMarked } : task
            );
        }
    },
});

export const { addTask, removeTask, markTask } = todoSlice.actions;

export default todoSlice.reducer;
