import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';



function App() {
  const [ inputText, setImputText ] = useState("");
  const [ todos, setTodos] = useState([])
  const removeItem = (elem) => { 
    let newTodo = todos.filter(( item => item.id !== elem.id ))
    setTodos(newTodo)
  } 
  const handleTogle = (item) => {
    let chekObj = todos.map(( e ) => {
      if ( e.id === item.id ){
        e.completed = !e.completed 
      }
      return e
    }) 
    setTodos(chekObj)
  }
  console.log(todos)
  return (
    <div className="App">
      <h1>
        todo-list 
      </h1>
      <Form inputText={inputText} 
      todos={ todos } 
      setTodos={ setTodos } 
      setImputText={setImputText} />
      <TodoList handleTogle = { handleTogle } removeItem={removeItem} todos = { todos }  />
    </div>
    
  );
}

export default App;
