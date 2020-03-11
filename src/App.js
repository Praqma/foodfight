import React from 'react';
import AddFood from './components/AddFood';
import './App.css';
import FoodList from './components/FoodList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My food</h1>
        <FoodList></FoodList>
        <AddFood/>

      </header>
    </div>
  );
}

export default App;
