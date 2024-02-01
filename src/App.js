import { useState } from 'react'

import './App.css'
import Input from './components/Input/Input'
import Todo from './components/Todo/Todo'

function App() {
  const [todo, setTodo] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const inputValue = event.target.elements.todoInput.value
    setTodo(inputValue)
  }

  return (
    <div className="App">
      <Input handleSubmit={handleSubmit} />
      <Todo todo={todo} />
    </div>
  )
}

export default App
