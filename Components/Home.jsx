import React, { useEffect, useState } from 'react'
import TaskBox from './TaskBox'
import './CSS/Home.scss'

const Home = () => {
  const [ tasks, setTasks] = useState([])
  const [title,setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  
  const TaskHandler = (e)=>{
      e.preventDefault()
      setTasks([...tasks,{title, description}])
      setTitle("")
      setDescription("")
  }
  
  const DeleteTask = (index)=>{
    const filteredArr = tasks.filter((task, i)=>{
      return i!==index;
    })
    setTasks(filteredArr)
  }
 

  return (
    <div className='home'>
      <article>

        <form action="" onSubmit={TaskHandler}>
          <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}  placeholder='Title' required />
          <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)}  placeholder='Description' required/>
          <input type="submit" className='buttons' value="ADD" />
        </form>
      </article>

      <section>
        {
          tasks.map((task,index)=>(<TaskBox key={index} title={task.title} description={task.description}  DeleteTask={DeleteTask} index={index}/>))
        }
      </section>
    </div>
  )
}

export default Home