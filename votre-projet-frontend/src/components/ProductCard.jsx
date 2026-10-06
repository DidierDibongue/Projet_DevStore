// src/components/ProductCard.jsx
import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        borderRadius: '8px',
        textAlign: 'center',
        width: '200px'
      }}
    >
      <img
        src={product.image}
        alt={product.nom}
        style={{ width: '100%', borderRadius: '4px' }}
      />

      <h3>{product.nom}</h3>

      <p style={{ fontWeight: 'bold', color: '#0052CC' }}>
        {product.prix}
      </p>

      <button
onClick={() => onAddToCart(product)}
      >
        Ajouter au panier
      </button>
    </div>
  );
}