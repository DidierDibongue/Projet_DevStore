// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Connexion à MongoDB (ici sur votre machine en local)
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Connecté avec succès : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erreur de connexion à MongoDB : ${error.message}`);
    process.exit(1); // Arrête le serveur en cas d'échec critique
  }
};

module.exports = connectDB; // Permet d'exporter la fonction pour l'utiliser ailleurs
