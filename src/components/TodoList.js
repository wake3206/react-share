import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <div className="col-md-12 todo-list-box" >
            <ul id="sortable" className="list-unstyled">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
         </div>
    );
};

export default TodoList;