import React from 'react';

// TODO: Create a `name` variable

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React

function JSXVariables({myName,thoughts}) {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {myName}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {myName.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default JSXVariables;
