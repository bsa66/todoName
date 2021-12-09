import React from "react";

const Form = ({ setImputText, todos, setTodos, inputText  }) => {
    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setImputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if ( !inputText ){
            alert('Error')
        }else{
            setTodos([
                ...todos, 
                { text: inputText, 
                    completed: false, 
                    id: Math.random() * 1000 },
            ]);
        }
        setImputText('');
    }
    return(
        <form>
            <input value={inputText} onChange={ inputTextHandler } type='text'/>
            <button onClick={ submitTodoHandler } type='submit'>
                Add btn
            </button>
        </form>
    );
}

export default Form;