import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import './App.css';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
