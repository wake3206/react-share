import React, { Component } from 'react';
import FormControl from "./FormControl";
import TodoList from "./TodoList";

class TodoContainer extends Component {
    render() {
        return (
            <div className="todo-app">
                <h1>Todos</h1>
                <FormControl />
                <TodoList />
            </div>
        );
    }
}

export default TodoContainer;