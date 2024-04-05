import Task from './Task'
const Tasks = ({tasks, onDelete, onAdd, onToggle}) => {
    
  return (
    <>
      {tasks.map((task) => (
      <Task key = {task.id} task = {task} 
      onDelete={onDelete}
      onAdd = {onAdd}
      onToggle = {onToggle}/>
      ))}
    </>
  )
}

export default Tasks
