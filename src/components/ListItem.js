export default function ListItem({ data, deleteTask, doneTask}){

    const {id, text, status} = data

    return <li key={id}>
            <span className={`${status==='done'?'done':''}`}>
                {text}
            </span>
            <span className={'list-actions'}>
                <a onClick={()=>{deleteTask(id)}}>x</a>
                {status === 'wait' && <a onClick={()=>{doneTask(id)}}>✔</a>}
            </span>            
        </li>
}