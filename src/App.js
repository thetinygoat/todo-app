import React, { Component } from 'react';
import axios from './axios';
import Todo from './components/Todo/Todo';
import Spinner from './components/Spinner/Spinner';
import NoTodos from './components/NoTodos/NoTodos';
import Input from './components/Input/Input';

class App extends Component {

  state = {
    tasks: [],
    loading: true,
    isEmpty: false,
    value: ''
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
          let newState = Object.keys(res.data).map(key => {
            return Object.assign(res.data[key], { id: key });
          });
          this.setState({
            tasks: newState,
            loading: false
          });
        }
      });
  }

  handlesubmit = (e) => {
    e.preventDefault();
    let post = {
      task: this.state.value,
      done: false,
      date: Date.now()
    }
    axios.post('/todo.json', post)
      .then(res => {
        let newTasks = [...this.state.tasks];
        let newPost = {
          ...post,
          id: res.data.name
        }
        newTasks.push(newPost);
        this.setState({
          tasks: newTasks,
          value: '',
          isEmpty: false
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleDelete = (id) => {

    axios.delete(`/todo/${id}.json`)
      .then(res => {
        let newTasks = this.state.tasks.filter(task => {
          return task.id !== id;
        })
        let isEmpty = false;
        if (newTasks.length === 0) {
          isEmpty = true;
        }
        this.setState({
          tasks: newTasks,
          isEmpty: isEmpty
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    let todos = null;
    let todo = this.state.tasks.map(task => {
      return (
        <Todo
          task={task.task}
          key={task.id}
          deleted={() => this.handleDelete(task.id)} />
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
        <Input
          changed={this.handleChange}
          submitted={this.handlesubmit}
          value={this.state.value} />
        {todos}
      </div>
    );
  }
}

export default App;
