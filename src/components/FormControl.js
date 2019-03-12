import React, { Component } from 'react';

class FormControl extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value:""
        }
    }
    
    handleChange = (e) => {
        this.setState({value:e.target.value})
    }

    handleSubmit = () => {
        this.props.onAddTodo(this.state.value);
        this.setState({value:""})
    }

    render() {
        return (
            <div className="form-inline">
                <div className="form-group col-md-10">
                    <input 
                        type="text" 
                        onChange={this.handleChange}
                        value={this.state.value}
                        className="form-control add-todo" 
                        placeholder="Add todo..." />
                </div>
                <button 
                    onClick={this.handleSubmit}
                    className="btn btn-primary ">ADD
                </button>
            </div>
        );
    }
}

export default FormControl;