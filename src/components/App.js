import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  const [state,dispatch] = useReducer(todoReducer,[]);
  return (
    <div id="main">
      <AddTodo dispatch={dispatch}/>
    {state.map((e,index)=>{
      return <Todo data={e} key={e.id} dispatch={dispatch} index={index}/>
    })}
    </div>
  )
}


export default App;
