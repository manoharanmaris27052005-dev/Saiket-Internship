function TaskSummary({ tasks }) {

    const completedCount = tasks.filter(
        (item) => item.completed
    ).length;

    return (
        <div className="task-summary">

            <span>
                Total: {tasks.length}
            </span>

            <span>
                Completed: {completedCount}
            </span>

        </div>
    );
}

export default TaskSummary;