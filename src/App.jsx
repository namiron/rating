import React from 'react'
import './App.scss';
import StarsRating from './components/starsRating/StarsRating';


const App = () => {
  return (
    <div className="App">
      <StarsRating count={5} />
    </div>
  );
}

export default App;
