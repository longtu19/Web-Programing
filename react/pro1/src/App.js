import './App.css';
import Info from './Info.js';

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text = "Long" number = {2} />
      <AddItem text = "Tim" />
      <AddItem text = "Nhim" />
    </div>
  );
}



function AddItem({text , number}){
  const val = text;

  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type = "text" value = {val} id = "text-form" />
      <p>{number}</p>
    </form>
  );
}

export default App;
