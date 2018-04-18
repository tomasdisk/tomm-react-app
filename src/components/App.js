import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header'
import './App.css'
import TodoItem from './TodoItem'

class App extends Component {
  newProps = {
    TodoContent: {
      TodoTitle: 'titulo',
      TodoDescription: 'descripcion'
    },
    TodoAuthor: {
      TodoAuthorImage: {
        Image: './favicon.ico',
        Alt: 'icon'
      },
      TodoAuthorName: 'juan'
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <TodoItem {...this.newProps}/>

        </div>
      </BrowserRouter>
    )
  }
}

export default App
