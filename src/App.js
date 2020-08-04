import React from 'react';
import styled from 'styled-components';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const Styledcontainer = styled.div`
  background-color: black;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-flow: wrap;

  h1 {
    color: orange;
    border: 2px solid red;
    padding: 2.5%;
  }
`


const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleTask = id => {

    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          // toggle purchased
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  clearCompleted = completedTask => {
    
    this.setState({
      tasks: this.state.tasks.filter(task => {
        if (task.completed !== true){
          return task;
        }
      })
    })
  }

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: new Date(),
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTodo]
    });
  }

  render() {
    return (
      <Styledcontainer>
        <h1 onClick={() => this.setState({})}>Welcome to your Todo App!</h1>
        <TodoList clearCompleted={this.clearCompleted} toggleTask={this.toggleTask} tasks={this.state.tasks} />
        <TodoForm addTodo={this.addTodo} />
      </Styledcontainer>
    );
  }
}

export default App;
