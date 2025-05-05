import React, { useEffect, useState } from 'react';
import './ProductGrid.css';
import heartFilled from '../assets/heartfilled.svg';
import heartOutline from '../assets/heart.png';

const ProductGrid = ({ selectedCategories, selectedSort }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.map((product) => ({
          ...product,
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

  const filtered = selectedCategories.length
    ? products.filter((p) => selectedCategories.includes(p.category))
    : products;

  const sorted = [...filtered].sort((a, b) => {
    switch (selectedSort) {
      case "Price High to Low":
        return b.price - a.price;
      case "Price Low to High":
        return a.price - b.price;
      case "Newest First":
        return b.id - a.id;
      case "Popular":
        return b.rating?.count - a.rating?.count;
      default:
        return 0;
    }
  });

  return (
    <section className="product-grid">
      {sorted.map((product, index) => (
        <div key={index} className="product-card">
          <div className="image-wrapper">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <p className="title">{product.title}</p>
            <p className="price">${product.price.toFixed(2)}</p>
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
