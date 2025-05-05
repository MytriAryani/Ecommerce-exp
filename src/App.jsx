import React from 'react';
import Header from './components/Header';
import './App.css';
import Herosection from './components/Herosection.jsx';
import TopBarOptions from './components/TopBarOptions.jsx';
import FilterAside from './components/FilterAside.jsx';
import ProductGrid from './components/Productgrid.jsx';



function App() {
  return (
    <div className="App">
      <Header />
      <Herosection />
     
      <div className='main'>
        <TopBarOptions/>
        <div className='main-section'>
          <FilterAside/>
          <ProductGrid/>
        </div>
      </div>
    </div>
  );
}

export default App;
