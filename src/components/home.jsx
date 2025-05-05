import React, { useState } from 'react';
import Header from './Header';
import Herosection from './Herosection';
import TopBarOptions from './TopBarOptions';
import Footer from './footer';
import FilterAside from './FilterAside';
import ProductGrid from './Productgrid';

function Home() {
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

export default Home;
