// src/components/Catalog.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import du sous-composant

export default function Catalog() {
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

  if (loading) return <p>Chargement des produits de DevStore...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Catalogue DevStore 📦</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product._id || product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
