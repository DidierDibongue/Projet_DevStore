// src/components/Cart.jsx
import React from 'react';

export default function Cart({
  cart,
  onIncrease,
  onDecrease
}) {
  return (
    <div
      style={{
        padding: '20px',
        marginBottom: '20px',
        borderBottom: '1px solid #ccc'
      }}
    >
      <h2>Mon panier 🛒</h2>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        cart.map(item => (
          <div
            key={item._id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px'
            }}
          >
            <h3 style={{ margin: 0 }}>
              {item.nom}
            </h3>

            <span>
              Quantité : {item.quantity}
            </span>

            <button
              onClick={() => onDecrease(item._id)}
              style={{
                padding: '5px 10px',
                cursor: 'pointer'
              }}
            >
              -
            </button>

            <button
              onClick={() => onIncrease(item._id)}
              style={{
                padding: '5px 10px',
                cursor: 'pointer'
              }}
            >
              +
            </button>
          </div>
        ))
      )}
    </div>
  );
}