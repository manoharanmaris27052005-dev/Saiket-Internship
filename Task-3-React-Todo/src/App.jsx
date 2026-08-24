import { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TaskSummary from "./components/TaskSummary";


function App() {

    // State
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [editingId, setEditingId] = useState(null);


    // Add / Update Task
    const addTask = () => {

        if (task.trim() === "") {
            return;
        }


        // Update existing task
        if (editingId !== null) {

            const updatedTasks = tasks.map((item) =>
                item.id === editingId
                    ? {
                        ...item,
                        title: task
                    }
                    : item
            );

            setTasks(updatedTasks);
            setEditingId(null);
            setTask("");

            return;
        }


        // Add new task
        const newTask = {
            id: Date.now(),
            title: task,
            completed: false
        };

        setTasks([
            ...tasks,
            newTask
        ]);

        setTask("");
    };


    // Edit Task
    const editTask = (id) => {

        const selectedTask = tasks.find(
            (item) => item.id === id
        );

        setTask(selectedTask.title);
        setEditingId(id);
    };


    // Delete Task
    const deleteTask = (id) => {

        const updatedTasks = tasks.filter(
            (item) => item.id !== id
        );

        setTasks(updatedTasks);
    };


    // Complete / Uncomplete Task
    const toggleTask = (id) => {

        const updatedTasks = tasks.map((item) =>
            item.id === id
                ? {
                    ...item,
                    completed: !item.completed
                }
                : item
        );

        setTasks(updatedTasks);
    };


    return (

        <div className="todo-app">

            <h1>My Todo App</h1>


            {/* Todo Form */}

            <TodoForm
                task={task}
                setTask={setTask}
                addTask={addTask}
                editingId={editingId}
            />


            {/* Todo List */}

            <TodoList
                tasks={tasks}
                toggleTask={toggleTask}
                editTask={editTask}
                deleteTask={deleteTask}
            />


            {/* Task Summary */}

            <TaskSummary
                tasks={tasks}
            />

        </div>
    );
}


export default App;