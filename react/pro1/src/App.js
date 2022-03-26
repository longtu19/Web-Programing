import { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar'
import AddItem from './AddItem'
import ItemsDisplay from './ItemsDisplay'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';




function App() {

  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: [] })


  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const addItemToData = (item) => {
    let items = data['items']

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",

      },
      body: JSON.stringify(item),
    }
    fetch("http://localhost:3000/items", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      items.push(data)
      setData({ items: items })

    })

    

  }

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name){
      return data;
    }

    for (const item of data){
      if (filters.name !== "" && item.name !== filters.name){
         continue
      }
       if (filters.price !== 0 && item.price > filters.price){ 
         continue
      }
      if (filters.type !== "" && item.type !== filters.type){ 
         continue
      }
      if (filters.brand !== "" && item.brand !== filters.brand){ 
         continue
      }

      filteredData.push(item)

    }

    return filteredData
  }

  return (
    <div className="container">
      <div className = "row mt-3"><ItemsDisplay items = {filterData(data['items'])} /></div>
      <div className = "row mt-3"><SearchBar updateSearch = {updateFilters} /></div>
      
      <div className = "row mt-3"><AddItem addItem = {addItemToData}/></div>

      
    </div>
    
  );
}





export default App;
