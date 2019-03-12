import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos, ...otherProps}) => {
    return (
        <div className="col-md-12 todo-list-box" >
            <ul id="sortable" className="list-unstyled">
                {
                    todos.map((i,k) => <TodoItem key={k} todo={i} {...otherProps}  /> )
                }
                {
                    todos.lenght <= 0 && <h3>ไม่มีรายการ</h3>
                }
            </ul>
         </div>
    );
};

export default TodoList;