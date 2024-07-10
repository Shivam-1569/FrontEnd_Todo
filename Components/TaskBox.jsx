import React from 'react'
import './CSS/TaskBox.scss'

const TaskBox = ({index, title,description, DeleteTask}) => {
  return (
    <div className='taskBox'>
        <section>
            <h3>{title}</h3>
            <h6>{description}</h6>
        </section>
        <button onClick={()=>DeleteTask(index)}>DELETE</button>
    </div>
  )
}

export default TaskBox