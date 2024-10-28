import { FormEvent, useContext, useState } from "react"
import { useTodos } from "../store/todos"

function Addtodo() {
    const [todo, settodo] = useState("")
    const {handleAddTodo} = useTodos()

    function handelsumbit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        handleAddTodo(todo)
        settodo("")
    }

  return (
    <form onSubmit={handelsumbit}>
        <input className="border-black outline-none font-semibold rounded-md px-2 py-2 " type="text" value={todo} onChange={(e)=>settodo(e.target.value)} placeholder="Enter YOur todo" />
        <button className="border-black ml-2 bg-red-600 text-black rounded-lg p-2 hover:bg-red-700 hover:scale-105" type="submit">Add Todo</button>
    </form>
  )
}

export default Addtodo
