function TodoForm({
    task,
    setTask,
    addTask,
    editingId
}) {

    return (
        <div className="todo-input">

            <input
                type="text"
                placeholder="Enter your task..."
                value={task}
                onChange={(event) =>
                    setTask(event.target.value)
                }
            />

            <button onClick={addTask}>
                {editingId !== null ? "Update" : "Add"}
            </button>

        </div>
    );
}

export default TodoForm;