import React from "react";
import styled from 'styled-components';

const TodoStyled = styled.div`
    width: 80%;
    background-color: green;
    height: 20%;
    margin: 2.5% 5%;
    
    &.completed {
        background-color: yellow;
    }
    
`

const Todo = props => {
  return (
    <TodoStyled
      onClick={() => props.toggleTask(props.task.id)}
      className={`item${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.task}</p>
    </TodoStyled>
  );
};

export default Todo;