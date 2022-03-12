import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {Navbar, NavbarBrand } from 'reactstrap'
import { render } from 'react-dom';


class App extends Component {
  render() {
    return (
      <div className = "App">
        <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href = "/">Anh Long dep trai vai lon </NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  }
 
}

export default App;
