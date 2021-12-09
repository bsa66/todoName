import React from "react";

const Todo = ({  removeItem, todo, handleTogle }) => {
   console.log(todo.completed)
    return (
        <div>
            <li style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{ todo.text }</li>
            <button onClick={()=> handleTogle(
                todo
            ) }><i className='fas fa-check'></i></button>
            <button  disabled={ todo.completed } onClick={() => removeItem(
                todo
            ) }><i className='fas fa-trash'></i></button>
        </div>
    );
}

export default Todo;