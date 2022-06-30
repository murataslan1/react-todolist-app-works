import ListItem from './ListItem'

export default function List({todos,deleteTask, doneTask}){

    const list = todos.map(item=>{
        return <ListItem 
        key={`list_item_${item.id}`}
        data={item}
        doneTask={doneTask} 
        deleteTask={deleteTask} />
    })


    return (<div>
            {todos.length===0 && <span>Bir görev yok</span>}

            <ul>
                {list}
            </ul>
        </div>)
}