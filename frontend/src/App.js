import React from 'react';
import './App.css';
import HomePage from './presentation/home/home_page';
import Careers from './presentation/careers/careers_page';
import CareerDetails from './presentation/careers_info/careers_details';
function App() {
  return (
    <div className="App">
      <CareerDetails/>
    </div>
  );
}

export default App;
