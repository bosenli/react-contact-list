
import './App.css';
import React,{useState,useEffect} from 'react';
import Contact from './components/Contact';

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('../data/contact.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      <Contact list = { data }/>
    </div>
  );
}

export default App;
