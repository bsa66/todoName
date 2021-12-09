import React from "react";
import Todo from './Todo'

const TodoList = ({ todos, removeItem, handleTogle }) => {
    
    return(
        <div>
            <ul>
                {todos.map( ( todo ) => (
                    <Todo removeItem={removeItem} 
                    // text = { todo.text } 
                    key = { todo.id }
                    todo= { todo }
                    handleTogle = { handleTogle }
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;