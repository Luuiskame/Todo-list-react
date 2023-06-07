import "./style.css"
import { useState } from "react"
function App(){
   const [newItem, setNewItem] = useState("")
   const [todos, setTodos] = useState([])

   function handleSubmit(event){
    event.preventDefault()

    if(newItem === "")return 
    
    setTodos(currentTodos=>{
        return [
            ...currentTodos,
            {id: crypto.randomUUID(), title: newItem, completed:false}
        ]
        // setTodos([...currentTodos,  {id: crypto.randomUUID(), title: newItem, completed:false}])
        
    })
    setNewItem("")
   }

   function toggleTodo(id, completed){
    setTodos(currentTodos=>{
        return currentTodos.map(todo=>{
            if(todo.id === id){
                return {...todo, completed}
            }
            return todo
        })
    })
   }

   function deleteTodo(id){
    setTodos(currentTodos=>{
        return currentTodos.filter(todo=> todo.id !== id)
    })
   }
    
    return(
        <>
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New item</label>
                <input type="text" id="item" value={newItem} onChange={event=> setNewItem(event.target.value)}/>
            </div>
            <button className="btn">Add</button>
        </form>
        <h1 className="header">To Do List</h1>
        <ul className="list">
            {todos.map(todo=>{
                return(
                    <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.completed} onChange={event=> toggleTodo(todo.id, event.target.checked)}/>
                        {todo.title}
                    </label>
                    <button onClick={()=> deleteTodo(todo.id)} className="btn btn-danger">delete</button>
                </li>
                )
            })}
        </ul>
        </>
    )
}

export default App