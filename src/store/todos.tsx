import { createContext, ReactNode, useContext, useState } from "react"

export type todosProviderProps = {
    children:ReactNode;
}

export type todo = {
    id: string;
    task: string;
    completed: boolean;
    createdat: Date;
}

export type todoContext = {
    todos: todo[];
    handleAddTodo: (task: string) => void
    toggleTodoAsChanged: (id:string) =>void
    handelDeletetodo: (id:string) =>void
}

export const todoContext = createContext<todoContext | null>(null);

export const TodoProvider = ({ children }:todosProviderProps) => {
    const [todos, settodos] = useState<todo[]>(()=>{
        try {
            const newtodo = localStorage.getItem("todos") || "[]"
            return JSON.parse(newtodo) as todo[]
        } catch (error) {
            return []
        }
    })

    const handleAddTodo = (task:string) => {
        settodos((prev) => {
            const newtodo: todo[] = [{
                id: Math.random().toString(),
                task: task,
                completed: false,
                createdat: new Date()
            },
            ...prev]
            // console.log(prev)
            // console.log(newtodo)
            localStorage.setItem("todos",JSON.stringify(newtodo))
            return newtodo
        })
    }

    const toggleTodoAsChanged = (id:string) =>{
        settodos((prev)=>{
            let newtodo = prev.map((todo)=>{
                if(todo.id === id){
                    return {...todo,completed:!todo.completed}
                }
                return todo
            })
            localStorage.setItem("todos",JSON.stringify(newtodo))
            return newtodo
        })
    }

    const handelDeletetodo = (id:string) =>{
        settodos((prev)=>{
            let newtodo = prev.filter((filertodo)=>filertodo.id !== id)
            localStorage.setItem("todos",JSON.stringify(newtodo))
            return newtodo
        })
    }


    return <todoContext.Provider value={{ todos, handleAddTodo, toggleTodoAsChanged, handelDeletetodo }}>
        {children}
    </todoContext.Provider>
}



export const useTodos = ()=>{
    const todoConsumer = useContext(todoContext)
    if(!todoConsumer){
        throw new Error("use todods are not wrapped ");  
    }
    return todoConsumer
}