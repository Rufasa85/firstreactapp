// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
function HelloDiv() {
  const me = "Joe";
  const people = ["Joe","Arra","Shiva","Bahamut","Brad"]
  return (
    <div>
       {people.map((taco,i)=>  <h1 key={i} className="mushroom">hello {taco}, your lucky number is {Math.floor(Math.random()*10)+1}</h1>)}
    </div>
  )
}


// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
