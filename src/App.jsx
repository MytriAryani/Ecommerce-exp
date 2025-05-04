import React from 'react';
import Header from './components/Header';
import './App.css';
import Herosection from './components/Herosection.jsx';
import TopBarOptions from './components/TopBarOptions.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Herosection />
     
      <div className='main'>
        <TopBarOptions/>
      </div>
    </div>
  );
}

export default App;
