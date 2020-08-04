// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import styled from 'styled-components';

import Todo from "./Todo";

const BigStyled = styled.div`
    flex-flow: wrap;
    width: 100%;
    display: flex;
    text-align: center;
`

const StyledSmallContainer = styled.div`

    margin: 0 auto;
    background-color: darkgray;
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    height: 50vh;
    overflow: scroll;
    overflow-x: hidden;

`

const BottomPanel = styled.div`

    width: 100%;
    background-color: blue;
    text-align: center;

    button {
        margin: 2.5%;
        padding: 2.5%;
        background-color: teal;
        font-size: 1.5rem;
    }
`

const TodoList = props => {

return (
    <BigStyled>
    <StyledSmallContainer className="todo-list">
      {props.tasks.map(item => (
        <Todo key={item.id} task={item} toggleTask={props.toggleTask} />
      ))}
    </StyledSmallContainer>
    <BottomPanel>
        <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </BottomPanel>
    </BigStyled>
  )
};

export default TodoList;