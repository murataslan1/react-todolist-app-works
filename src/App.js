import {TodoForm, List} from './components'
import {useState, useEffect} from 'react'

export default function App(){
  
  const [filter, setFilter] = useState('all')
  const [todos, setTodo] = useState([])

  useEffect(()=>{
    let _todos = localStorage.getItem('todos')
    if (!_todos){
      localStorage.setItem('todos',JSON.stringify([]))
      console.log('local storage yaratıldı')
    } else {
      setTodo(JSON.parse(_todos))
    }
  },[])

  const createTask = (task) => {
    let id = Math.floor(Math.random() * 10000) 
    let _updatedList = [...todos, {
      id: id,
      text:task,
      status:'wait'
    }]
    setTodo(_updatedList)
    localStorage.setItem('todos', JSON.stringify(_updatedList))
  }

  const deleteTask = (id) => {
      let _todos = todos.filter(item=>item.id!==id)
      setTodo(_todos)
      localStorage.setItem('todos', JSON.stringify(_todos))
  }

  
  const doneTask = (id) => {
    let _todos = []
    todos.forEach(item=>{
      if (id === item.id){
        item.status = 'done'
      }
      _todos.push(item)
    })
    setTodo(_todos)
    localStorage.setItem('todos', JSON.stringify(_todos))
  }


  let filteredTodos = todos.filter(item=>(filter==='all' || filter===item.status))

  return(
    <div className={'todo-container'}>
      <TodoForm createTask={createTask} 
      setFilter={(filter)=>{
        setFilter(filter)
      }} />
      <List todos={filteredTodos} deleteTask={deleteTask} doneTask={doneTask} />
    </div>
  )
}