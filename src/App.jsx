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
  const [showFilter, setShowFilter] = useState(true);
  const [selectedSort, setSelectedSort] = useState("Recommended");

  return (
    <div className="App">
      <Header />
      <Herosection />
      <div className='main'>
        <TopBarOptions
          showFilter={showFilter}
          toggleFilter={() => setShowFilter((prev) => !prev)}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
        />
        <div className='main-section'>
          {showFilter && (
            <FilterAside
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
            />
          )}
          <ProductGrid
            selectedCategories={selectedCategories}
            selectedSort={selectedSort}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
