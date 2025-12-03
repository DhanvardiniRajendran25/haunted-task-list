import { useState, useEffect } from 'react'
import './TaskCard.css'

function TaskCard({ id, text, createdAt, onExorcise }) {
  const [isHaunted, setIsHaunted] = useState(false)

  useEffect(() => {
    const checkHaunted = () => {
      const haunted = Date.now() - createdAt > 10000
      setIsHaunted(haunted)
    }

    // Check immediately
    checkHaunted()

    // Check every second
    const interval = setInterval(checkHaunted, 1000)
    return () => clearInterval(interval)
  }, [createdAt])

  return (
    <div className={`task-card ${isHaunted ? 'haunted' : ''}`}>
      <span className="task-text">{text}</span>
      <button 
        className="exorcise-button"
        onClick={() => onExorcise(id)}
      >
        {isHaunted ? '👻 Exorcise' : '✕'}
      </button>
    </div>
  )
}

export default TaskCard
