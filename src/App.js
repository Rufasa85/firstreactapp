import React from 'react';
import Counter from './components/Counter';

function App() {
  return( 
    <>
  <Counter  startAt={6}/>
  <Counter />
  <Counter />
  <Counter />
  </>
  );
}

export default App;
