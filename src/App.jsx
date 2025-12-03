import { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      createdAt: Date.now()
    }
    setTasks([...tasks, newTask])
  }

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">👻 Haunted Task List 🎃</h1>
        <p className="subtitle">Tasks become haunted after 10 seconds...</p>
        <AddTaskForm onAddTask={addTask} />
        <TaskList 
          tasks={tasks} 
          onRemoveTask={removeTask}
        />
      </div>
    </div>
  )
}

export default App
