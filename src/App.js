import React, { Component } from 'react';
import axios from './axios';
import Todo from './components/Todo/Todo';
import Spinner from './components/Spinner/Spinner';
import NoTodos from './components/NoTodos/NoTodos';

class App extends Component {

  state = {
    tasks: [],
    loading: true,
    isEmpty: false
  }

  componentDidMount() {
    axios.get('/todo.json')
      .then(res => {
        if (res.data === null) {
          this.setState({
            loading: false,
            isEmpty: true
          })
        } else {
          let newState = Object.keys(res.data).map(keys => {
            return (res.data[keys]);
          });
          this.setState({
            tasks: newState,
            loading: false
          });
        }
      });

    // axios.post('/todo.json', {
    //   "task": 'hello world',
    //   done: false
    // })

  }
  render() {
    let todos = null;
    let todo = this.state.tasks.map(task => {
      return (
        <Todo task={task.task} key={task.date} />
      )
    });
    if (this.state.loading) {
      todos = <Spinner />;
    } else if (!this.state.loading && this.state.isEmpty) {
      todos = <NoTodos />;
    } else {
      todos = todo;
    }

    return (

      <div className="App">
        {todos}
      </div>
    );
  }
}

export default App;
