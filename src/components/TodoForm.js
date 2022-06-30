import {useState} from 'react'

export default function TodoForm({createTask, setFilter}){

    const [task, setTask] = useState('')

    const doSubmit = (e) => {
        createTask(task)
        setTask('')
        e.preventDefault()
    }

    return <form method={'post'} onSubmit={doSubmit}>

        <input 
        onChange={e=>{
            setTask(e.target.value)
        }}
        value={task}
        type={'text'} 
        placeholder={'Put your task here'} /> 

        <button type={'submit'}>Add Task</button>

    <select onChange={(e)=>{
        setFilter(e.target.value)
    }}>
            <option value='all'>All</option>
            <option value='wait'>Wait</option>
            <option value='done'>Done</option>
        </select>
    </form>
    
}