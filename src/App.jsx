import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Herosection from './components/Herosection.jsx';
import TopBarOptions from './components/TopBarOptions.jsx';
import Footer from './components/footer.jsx';
import FilterAside from './components/FilterAside.jsx';
import ProductGrid from './components/Productgrid.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Home from './components/home.jsx';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
      </Routes>

      
      {isLoggedIn && (
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
      )}
    </Router>
  );
}

export default App;