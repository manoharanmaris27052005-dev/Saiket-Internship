import TodoItem from "./TodoItem";

function TodoList({
    tasks,
    toggleTask,
    editTask,
    deleteTask
}) {

    if (tasks.length === 0) {
        return (
            <p className="empty-message">
                No tasks yet. Add your first task!
            </p>
        );
    }

    return (
        <div className="task-list">

            {tasks.map((item) => (

                <TodoItem
                    key={item.id}
                    item={item}
                    toggleTask={toggleTask}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />

            ))}

        </div>
    );
}

export default TodoList;