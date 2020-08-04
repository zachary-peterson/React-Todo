import React from "react";
import styled from 'styled-components';

const TheForm = styled.form`
    display: flex;
    width: 100%;
    text-align: center;

    input {
        margin: 0 auto;
        width: 80%;
        height: 10vh;
        font-size: 2rem;
    }

    button {
        margin: 0 auto;
        width: 35%;
        background-color: purple;
        color: white;
        height: 10vh;
    }
`

class TodoForm extends React.Component  {
    constructor(){
        super();
        this.state = {
            todoText: ''
        };
    };

    handleChanges = e => {
        this.setState({
            todoText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        // Need to add a to-do function to App.js
        this.props.addTodo(this.state.todoText);
        this.setState({
            todoText: ''
        });
    }

    render () {
        return (
        <TheForm onSubmit={this.handleSubmit}>
            <input
                type='text'
                name='item'
                value={this.state.todoText}
                onChange={this.handleChanges}
            />
            <button>Submit To-Do</button>
        </TheForm>
        );
    }

}

export default TodoForm;