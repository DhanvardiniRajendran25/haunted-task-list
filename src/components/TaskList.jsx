import TaskCard from './TaskCard'
import './TaskList.css'

function TaskList({ tasks, onRemoveTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add one to get started! 🕷️</p>
      </div>
    )
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          id={task.id}
          text={task.text}
          createdAt={task.createdAt}
          onExorcise={onRemoveTask}
        />
      ))}
    </div>
  )
}

export default TaskList
