import './App.css'
import Addtodo from './components/Addtodo'
import Navbar from './components/Navbar'
import Todos from './components/todos'

function App() {

  return (
    <main className='w-[50%] mx-auto border-black p-3 bg-gray-300'>
      <h1 className='mb-10 font-bold text-3xl'>Todo App using Typescript</h1>
      <Navbar/>
      <Addtodo/>
      <Todos/>
    </main>    
  )
}

export default App
