import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starwarsData, setStarWarsData]= useState("people/");
  // people/?page=2
  // people/?page=3    etc
  useEffect(() => {
  axios
  .get(`https://swapi.co/api/${starwarsData}`)
  .then(response =>{
    console.log("initial response",response)
    const arrayOfStarWars = [response.data.results];
    console.log("modified response into data array of objects to loop through", arrayOfStarWars);
  })
  .catch(error =>{
    console.log("starwars data not gotten", error);
  })
  // effect
  // return () => {
  //   cleanup
  // };
}, [starwarsData]);
  
return (
    <div className="App">
      <h1 className="Header">React Wars: Choose Your Character!</h1>
      
      arrayOfStarWars.map((person) => 
        <Card person= {person}   
        /> 
      )
             
    </div>
  );
}

export default App;
