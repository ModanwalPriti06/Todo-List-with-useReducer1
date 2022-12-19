import React from 'react';
const Todo = ({data,dispatch}) => {
const handleDelete=()=>{
    dispatch({type:"DELETE_TODO",payload:data.id})
    
}
    return (
        <div className='todo'>
        <div className='todo-title'>{data.title}</div>
        <button className='todo-delete' onClick={handleDelete}>Delete</button>
        </div>
    )
}


export { Todo }

