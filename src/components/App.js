import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header'
import './App.css'
import TodoList from './TodoList'

class App extends Component {
  newProps = {
    todos: [
      {
        TodoID: '0',
        TodoContent: {
          TodoTitle: 'primer titulo',
          TodoDescription: 'primera descripcion'
        },
        TodoAuthor: {
          TodoAuthorImage: {
            Image: './favicon.ico',
            Alt: 'icon'
          },
          TodoAuthorName: 'juan'
        }
      },
      {
        TodoID: '1',
        TodoContent: {
          TodoTitle: 'titulo nuevo',
          TodoDescription: 'descripcion nueva'
        },
        TodoAuthor: {
          TodoAuthorImage: {
            Image: './favicon.ico',
            Alt: 'icon'
          },
          TodoAuthorName: 'pablo'
        }
      },
      {
        TodoID: '2',
        TodoContent: {
          TodoTitle: 'otro tirulo',
          TodoDescription: 'otra descripcion'
        },
        TodoAuthor: {
          TodoAuthorImage: {
            Image: './favicon.ico',
            Alt: 'icon'
          },
          TodoAuthorName: 'jaime'
        }
      }
    ]
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <TodoList {...this.newProps}/>

        </div>
      </BrowserRouter>
    )
  }
}

export default App
