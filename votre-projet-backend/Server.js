const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const productSchema = new mongoose.Schema({
  nom: String,
  prix: String,
  image: String
});

const Product = mongoose.model('Product', productSchema);

app.get('/api/products', async (req, res) => {
  try {
    const produits = await Product.find();
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des produits"
    });
  }
});

app.listen(5000, () => {
  console.log("Le serveur Backend tourne sur http://localhost:5000");
});