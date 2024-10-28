import { useSearchParams } from "react-router-dom"
import { useTodos } from "../store/todos"

function Todos() {

    const [searchParams]= useSearchParams()
    let todosdata = searchParams.get("todos")

    let {todos, toggleTodoAsChanged,handelDeletetodo} = useTodos()
    let filteredData = todos

    if(todosdata === "active"){
        filteredData = filteredData.filter((task)=>!task.completed)
    }
    if(todosdata === "completed"){
        filteredData = filteredData.filter((task)=>task.completed)
    }
  return (
    <ul className="mt-5 ">
        {
            filteredData.map((todo)=>{
                return <li className="flex gap-4 mt-3 items-center justify-center w-full" key={todo.id}>
                    <input className="w-[10%]" type="checkbox"  id={`todo-${todo.id}`} checked={todo.completed} onChange={()=>toggleTodoAsChanged(todo.id)}/>
                    <label className="w-[40%]" htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                    {
                        todo.completed && (
                            <button className="border-black w-[30%] bg-red-600 rounded-lg p-2 font-semibold" type="button" onClick={()=>handelDeletetodo(todo.id)}>Delete</button>
                        )
                    }
                </li>
            })
        }
    </ul>
  )
}

export default Todos
