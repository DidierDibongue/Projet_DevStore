// src/components/ProductCard.jsx
import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center', width: '200px' }}>
      <img src={product.image} alt={product.nom} style={{ width: '100%', borderRadius: '4px' }} />
      <h3>{product.nom}</h3>
      <p style={{ fontWeight: 'bold', color: '#0052CC' }}>{product.prix}</p>
      <button style={{ backgroundColor: '#0052CC', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
        Ajouter au panier
      </button>
    </div>
  );
}
