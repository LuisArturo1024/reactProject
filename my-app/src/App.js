import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import TodoList from './components/TodoList';
import React, {useState,useRef,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([{id:1, name:"Todo 1", complete:false},{id:2, name:"Todo 2", complete:true}])

  const todoNameRef = useRef()

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4(), name:name, complete:false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}> Add Todo</button>
      <button> Clear Completed tasks</button>
      <div>None left</div>
    </>
  );
}

export default App;
