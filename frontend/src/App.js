import React from 'react';
import './App.css';
import HomePage from './presentation/home/home_page';


function App() {
  return (
    <div className="App">
      <HomePage /> {/* ✅ calling HomePage here */}
    </div>
  );
}

export default App;
