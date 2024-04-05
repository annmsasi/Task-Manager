// import './App.css';
import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"

const App = () => {
  const[showAddTask, setShowAddTask] = useState(false)
  const[tasks, setTasks] = useState([
    {    
        id: 1,
        text: "Cse 130",
        day: "Mon/Wed/Fri",
        reminder: true,
    },
    {    
        id: 2,
        text: "Cse 111",
        day: "Mon/Wed/Fri",
        reminder: true,
    },
    {    
        id: 3,
        text: "TIM 175",
        day: "Mon/Tues",
        reminder: false,
    },
])

const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000)+1
  const newTask = {
    id, ...task
  }
  setTasks([...tasks, newTask])
}
const Reminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id
  ? {...task, reminder:!task.reminder}: task
  )
  )
}
return (
    <div className='container'>
      <Header onAdd = {()=> setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length>0 ? (
      <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {Reminder}/> 
      ): ("No more tasks!")}
      </div>
  )
}

export default App;
 