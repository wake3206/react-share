import React, { Component } from 'react';
import FormControl from "./FormControl";
import TodoList from "./TodoList";
import Title from "./Title";

class TodoContainer extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            todos:[
                {id:1, txt:"รายการ1", checked:false},
                {id:2, txt:"รายการ2", checked:true},
                {id:3, txt:"รายการ3", checked:false}
            ]
        }
    }


    handleCheck = (id, checked) => {
        console.log('val->',checked,'id', id);
        this.onChangeComplete( id, !checked );
        
    }

    onChangeComplete = (id, check) => {

        let newTodos = this.state.todos.map(i => (id === i.id) ? {...i, checked:check}:i  );
        this.setState({todos:newTodos});

    }

    onAddTodo = (newTodo) => {

        console.log(this.state.todos);
        
        // this.setState(curr => ({
        //     todos:[
        //         ...curr.todos, 
        //         {
        //             id:(curr.todos.length)+1,
        //             txt:newTodo ,
        //             checked:false
        //         }
        //     ]
        // }))

        this.setState({
            todos:[
                ...this.state.todos, 
                {
                    id:(this.state.todos.length)+1,
                    txt:newTodo ,
                    checked:false
                }
            ]
        });
    }
    
    render() {
        return (
            <div className="todo-app">
                <Title />
                <FormControl
                    onAddTodo={this.onAddTodo} />
                <TodoList 
                    handleCheck={this.handleCheck}
                    todos={this.state.todos} />
            </div>
        );
    }
}

export default TodoContainer;