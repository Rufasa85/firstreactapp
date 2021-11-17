import React from "react";
import JSXVariables from "./components/JSXVariables";

function App() {
  const devs = [
    {
      id:1,
      name:"Joe",
      thoughts:"is great!"
    },
    {
      id:2,
      name:"Shiva",
      thoughts:"meow!"
    },
    {
      id:3,
      name:"Thunder",
      thoughts:"pretty cool!"
    },
    {
      id:4,
      name:"Charmander",
      thoughts:"charmander!"
    }
  ]
  return( 
    <div>
      <JSXVariables myName="aslkdfhaef" thoughts="is reactive!"/>
     {devs.map(person=><JSXVariables key={person.id} myName={person.name} thoughts={person.thoughts}/>)}
    </div>
  );
}

export default App;
