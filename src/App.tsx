import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FoodList} from './components/foodlist';

const App: React.FC = () => {
  return (
    <div className="App">
      <FoodList></FoodList>
      
    </div>
  );
}

export default App;

