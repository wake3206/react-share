import React from 'react';

const TodoItem = ({todo, handleCheck}) => {

    return (
        <li className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input 
                        checked={todo.checked}
                        onChange={e => handleCheck(todo.id,todo.checked)}
                        type="checkbox" 
                        value="" />
                    <span 
                        style={{
                            marginLeft:'5px', 
                            textDecoration:(todo.checked) ? 'line-through': 'none'
                        }} >{todo.txt}</span>
                </label>
            </div>
        </li>
    );
};

export default TodoItem;