// src/App.jsx
import React from 'react';
import Catalog from './components/Catalog';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Catalog />
    </div>
  );
}

export default App;
