import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
//import { todo } from '../../backend/db'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
