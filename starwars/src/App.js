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
  const [apiData, setApiData]= useState(0);
  const [starWarsData, setStarWarsData]= useState([]);
  const [apiRequest, setApiRequest]= useState("people/");
  const [numOfButtons, setNumOfButtons]= useState(0);
  useEffect(() => {
  axios
  .get(`https://swapi.co/api/${apiRequest}`)
  .then(response =>{
    console.log("initial response",response)
    setStarWarsData(response.data.results);
    // console.log("modified response into data array of objects to loop through", response.data.results);
    if (apiData ==0){
      setApiData(response.data)};
  })
  .catch(error =>{
    console.log("starwars data not gotten", error);
  })
  // effect
  // return () => {
    //   cleanup
    // };
  }, [apiRequest]);
useEffect(() => {
  if(apiData != 0 ){
    console.dir("Theory",apiData);
    setNumOfButtons(numOfButtons => {
      return Math.ceil(apiData.count / apiData.results.length)
    })
  }
}, [apiData])
  
  
  
  console.log("this is numOfButtons",numOfButtons);
  let buttonList=[]
  for (let i=1; i<numOfButtons+1;i++){
    buttonList.push( <PageButton onClick={ () =>setApiRequest(`people/?page=${i}`)} key={i}>{`Page ${i}`}</PageButton>);
  }
  
        
return (
    <div className="App">
      <section className ="top">
        <h1 className="Header">React Wars: Choose Your Character!</h1>
        {buttonList}
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
