import React, { Component } from 'react';
import axios from './axios';
import Todo from './components/Todo/Todo';

class App extends Component {

  state = {
    tasks: []
  }

  componentDidMount() {
    axios.get('/todo.json')
      .then(res => {
        let newState = Object.keys(res.data).map(keys => {
          return (res.data[keys]);
        });
        this.setState({
          tasks: newState,
        });
      });
  }
  render() {

    let todo = this.state.tasks.map(task => {
      return (
        <Todo task={task.task} key={task.date} />
      )
    })

    return (
      <div className="App">
        {todo}
      </div>
    );
  }
}

export default App;
