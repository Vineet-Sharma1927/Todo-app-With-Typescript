import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {TodoProvider} from "./store/todos.tsx"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <App />
      </TodoProvider>
    </BrowserRouter>
  </StrictMode>,
)
