import './App.css';
import Info from './Info.js';
import { useState } from "react";
import useCollapse from 'react-collapsed';



function App() {
  return (
    <div className="App">
      <ButtonState />
    </div>
  );
}

function ButtonState(){

  
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <ul>Home</ul>
      <ul>Service</ul>
        <button className="header" {...getToggleProps()}>
            {isExpanded ? 'Hide' : 'Expand'}
        </button>
        <div {...getCollapseProps()}>
            <div className="content">
                Cooking <br/><br/>
                Cleaning
              
            </div>
        </div>

        <ul>Contact</ul>
        <button className="header" {...getToggleProps()}>
            {isExpanded ? 'Hide' : 'Expand'}
        </button>
        <div {...getCollapseProps()}>
            <div className="content">
                Phone <br/><br/>
                Mailing
              
            </div>
        </div>
    </div>
  );  
  
  // const updateSer = () => {
  //   <div>
  //     <SerState />

  //   </div>
    
  // }
  // const updateCon = () => {
  //   <div>
  //     <ContState />

  //   </div>
    
  // }
  // return (
  //   <div>
  //     <ul>Home</ul>
  //     <ul>Service</ul>
  //     <button onClick = {updateSer} >Expand</button>
  //     <ul>Contact</ul>
  //     <button onClick = {updateCon} >Expand</button>
  //   </div>

  // )
}
function SerState(){
  return (
    <div>
      <ul>Cooking</ul>
      <ul>Cleaning</ul>
    </div>
  )
}
function ContState(){
  return (
    <div>
      <ul>Phone</ul>
      <ul>Mailing</ul>
    </div>
  )
}

function Data(props){
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count} </p>
    </div>
  )
}


export default App;
