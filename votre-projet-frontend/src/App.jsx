
import { useState } from 'react';
import Catalog from './components/Catalog';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        item => item._id === product._id
      );

      if (existingProduct) {
        return currentCart.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <Catalog onAddToCart={addToCart} />
    </div>
  );
}

export default App;

