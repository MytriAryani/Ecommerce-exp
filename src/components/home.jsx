import React from "react";
import Header from "./Header";
import FilterAside from "./FilterAside";
import ProductGrid from "./Productgrid";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Header />

      <div className="main">
        <div className="main-section" style={{ display: "flex" }}>
          <FilterAside />
          <ProductGrid />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
