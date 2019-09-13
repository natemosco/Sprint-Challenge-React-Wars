import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from "axios";
import PageButton from "./components/PageButton";
import Cards from "./components/Cards";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starWarsData, setStarWarsData]= useState([]);
  const [apiRequest, setApiRequest]= useState("people/");
  
  useEffect(() => {
  axios
  .get(`https://swapi.co/api/${apiRequest}`)
  .then(response =>{
    console.log("initial response",response)
    setStarWarsData(response.data.results);
    console.log("modified response into data array of objects to loop through", response.data.results);
  })
  .catch(error =>{
    console.log("starwars data not gotten", error);
  })
  // effect
  // return () => {
  //   cleanup
  // };
}, [apiRequest]);
  
return (
    <div className="App">
      <section className ="top">
        <h1 className="Header">React Wars: Choose Your Character!</h1>
        <PageButton onClick={ () =>setApiRequest("people/?page=2")}>Page 1</PageButton>
        <PageButton onClick={ () =>setApiRequest("people/?page=3")}>Page 2</PageButton>
        <PageButton onClick={ () =>setApiRequest("people/?page=4")}>Page 3</PageButton>
        <PageButton onClick={ () =>setApiRequest("people/?page=5")}>Page 4</PageButton>
        <PageButton onClick={ () =>setApiRequest("people/?page=6")}>Page 5</PageButton>
        <PageButton onClick={ () =>setApiRequest("people/?page=7")}>Page 6</PageButton>
        <PageButton onClick={ () =>setApiRequest("people/?page=8")}>Page 7</PageButton>
        <PageButton onClick={ () =>setApiRequest("people/?page=9")}>Page 8</PageButton>

      </section>
      <section className="bottom">
        {starWarsData.map((personObj,index) => 
          <Cards person= {personObj} key={index}  
          /> 
          )}
      </section>

      </div>
    
      
        
  );
}

export default App;
