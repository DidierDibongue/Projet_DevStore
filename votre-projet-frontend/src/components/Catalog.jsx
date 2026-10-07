// src/components/Catalog.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function Catalog({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur API :", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des produits de DevStore...</p>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Catalogue DevStore 📦</h1>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap'
        }}
      >
        {products.map(product => (
          <ProductCard
            key={product._id || product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}