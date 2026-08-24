function TodoItem({
    item,
    toggleTask,
    editTask,
    deleteTask
}) {

    return (
        <div className="task-item">

            <div className="task-content">

                <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() =>
                        toggleTask(item.id)
                    }
                />

                <span
                    className={
                        item.completed
                            ? "completed"
                            : ""
                    }
                >
                    {item.title}
                </span>

            </div>


            <div className="task-actions">

                <button
                    className="edit-btn"
                    onClick={() =>
                        editTask(item.id)
                    }
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() =>
                        deleteTask(item.id)
                    }
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TodoItem;