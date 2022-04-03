import './App.css';
import React, { Component } from 'react'
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './Redux/configureStore'

const store = configureStore()


class App extends Component {

  render() {
    return (

      <Provider store = {store}>
          <BrowserRouter>
          <div>  
            <Main />
          </div>
        
        </BrowserRouter>

      </Provider>
      
      
    )
  }
 
}

export default App;
