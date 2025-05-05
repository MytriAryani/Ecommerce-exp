import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Herosection from './components/Herosection.jsx';
import TopBarOptions from './components/TopBarOptions.jsx';
import Footer from './components/footer.jsx';
import FilterAside from './components/FilterAside.jsx';
import ProductGrid from './components/Productgrid.jsx';

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <div className="App">
      <Header />
      <Herosection />
      <div className='main'>
        <TopBarOptions />
        <div className='main-section'>
          <FilterAside
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories}
          />
          <ProductGrid selectedCategories={selectedCategories} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
