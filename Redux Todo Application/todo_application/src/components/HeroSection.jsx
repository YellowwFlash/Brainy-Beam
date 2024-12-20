import { addTask, markTask, removeTask } from "@redux/slice/todoSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles/style";

const HeroSection = () => {
    const [newTask, setNewTask] = useState({ title: "", task_description: "", date: "" });
    const dispatch = useDispatch();
    const tasks = useSelector(state => state);

    const handleAddTask = (event) => {
        event.preventDefault();
        if (newTask.title && newTask.task_description && newTask.date) {
            dispatch(addTask(newTask));
            setNewTask({ title: "", task_description: "", date: "" });
        }
    };

    const handleRemoveTask = (id) => {
        dispatch(removeTask(id));
    };

    const handleMarkTask = (id) => {
        dispatch(markTask(id));
    };

    return (
        <div style={styles.heroSection}>
            <h1 style={styles.heading}>My Todo List</h1>

            <div>
                <form onSubmit={handleAddTask} style={styles.addTaskContainer} >
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Task Description"
                        value={newTask.task_description}
                        onChange={(e) => setNewTask({ ...newTask, task_description: e.target.value })}
                        style={styles.input}
                    />
                    <input
                        type="date"
                        value={newTask.date}
                        onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                        style={styles.input}
                    />
                    <button style={styles.addButton}>Add Task</button>
                </form>
            </div>

            <div style={styles.taskList}>
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        style={styles.taskItem}
                    >
                        <div style={styles.taskContent}>
                            <h3 style={styles.taskTitle}>{task.title}</h3>
                            <p style={styles.taskDescription}>{task.task_description}</p>
                            <p style={styles.taskDate}>{task.date}</p>
                        </div>
                        <div style={styles.taskActions}>
                            <button onClick={() => handleMarkTask(task.id)} style={styles.markButton}>
                                {task.isMarked ? "Unmark Task" : "Mark as Complete"}
                            </button>
                            <button onClick={() => handleRemoveTask(task.id)} style={styles.removeButton}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default HeroSection;
