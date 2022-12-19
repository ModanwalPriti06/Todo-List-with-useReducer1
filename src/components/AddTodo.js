import React from "react"

const AddTodo = ({ dispatch }) => {
    const handleForm=(e)=>{
        e.preventDefault();
        let todoData={id:Date.now(),title:e.target.title.value}
        dispatch({type:"ADD_TODO",payload:todoData})
       // console.log(e.target.title.value);
       e.target.reset();
    }

    return (
        <div className="form-wrapper">
        <h1>Todo List UseReducer</h1>
        <form onSubmit={handleForm}>
            <input name="title" id="todo-form"/>
            <button type="submit">Add</button>

        </form>
        </div>
    )
}

export { AddTodo }
