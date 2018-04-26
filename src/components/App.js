import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"
import "./App.css"
import TodoList from "./TodoList"
import axios from "axios"

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/todos/")
      .then(response => this.setState({ todos: response.data }))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <TodoList todos={this.state.todos} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
