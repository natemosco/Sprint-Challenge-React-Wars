import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PageButton from "./components/PageButton";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starWarsData, setStarWarsData]= useState([]);
  const [apiRequest, setApiRequest]= useState("people/");
  // people/?page=2
  // people/?page=3    etc
  useEffect(() => {
  axios
  .get(`https://swapi.co/api/${apiRequest}`)
  .then(response =>{
    console.log("initial response",response)
    const setStarWarsData = [response.data.results];
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
      <PageButton onClick={() =>setApiRequest("people/?page2")}>Page 1</PageButton>
      <PageButton onClick={() =>setApiRequest("people/?page3")}>Page 2</PageButton>
      <PageButton onClick={() =>setApiRequest("people/?page4")}>Page 3</PageButton>
      <PageButton onClick={() =>setApiRequest("people/?page5")}>Page 4</PageButton>
      <PageButton onClick={() =>setApiRequest("people/?page6")}>Page 5</PageButton>
      <PageButton onClick={() =>setApiRequest("people/?page7")}>Page 6</PageButton>
      <PageButton onClick={() =>setApiRequest("people/?page8")}>Page 7</PageButton>
      <PageButton onClick={() =>setApiRequest("people/?page9")}>Page 8</PageButton>
      
      arrayOfStarWars.map((person) => 
        <Card person= {person}   
        /> 
      )
             
    </div>
  );
}

export default App;
