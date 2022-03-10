import './App.css';
import Info from './Info.js';
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info />
      <ButtonState />
    </div>
  );
}

function ButtonState(){
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const updateTitle = () => {
    setTitle("We have a title!");
  }
  const updateCount = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <Data title = {title} count = {count} />
      <button onClick = {updateTitle} >Update Title</button>
      <button onClick = {updateCount} >Update Counter</button>
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
