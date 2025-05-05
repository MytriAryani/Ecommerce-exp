import React, { useEffect, useState } from 'react';
import './ProductGrid.css';
import heartFilled from '../assets/heartfilled.svg';
import heartOutline from '../assets/heart.png';

const ProductGrid = ({ selectedCategories }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.map((product, i) => ({
          ...product,
          new: i % 3 === 0,
          outOfStock: i % 4 === 0,
          liked: false,
        }));
        setProducts(enriched);
      });
  }, []);

  const toggleLike = (index) => {
    setProducts((prev) =>
      prev.map((product, i) =>
        i === index ? { ...product, liked: !product.liked } : product
      )
    );
  };

  const filteredProducts = selectedCategories.length === 0
    ? products
    : products.filter(p => selectedCategories.includes(p.category));

  return (
    <section className="product-grid">
      {filteredProducts.map((product, index) => (
        <div key={index} className={`product-card ${product.outOfStock ? 'out-of-stock' : ''}`}>
          {product.new && <span className="badge new">NEW PRODUCT</span>}
          {product.outOfStock && <span className="badge out-of-stock">OUT OF STOCK</span>}

          <div className="image-wrapper">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-details">
            <p className="title">{product.title}</p>
            <p className="subtext">
              <a href="/signin">Sign in</a> or Create an account to see pricing
            </p>
          </div>

          <img
            src={product.liked ? heartFilled : heartOutline}
            className={`heart-icon ${product.liked ? 'liked' : ''}`}
            alt="Like"
            onClick={() => toggleLike(index)}
          />
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;
