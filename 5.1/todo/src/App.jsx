import { useState } from 'react'


let nextId = 0;
function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo(){
    setTodos([...todos, {
      title: name,
      description: description
    }])
  }

  return (
    <>
      <input value = {name} onChange={e => setName(e.target.value)}/>
      <input value = {description} onChange={e => setDescription(e.target.value)}></input>
      <button onClick={addTodo}>TODO</button>
      <div>
        {todos.map(function(todos){
        return <Todo title = {todos.title} description = {todos.description}/>
        })}
      </div>
      
    </>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
  </div>
}




export default App
