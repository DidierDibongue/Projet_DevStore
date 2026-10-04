const mongoose = require('mongoose');
const connectDB = require('./config/db');

const productSchema = new mongoose.Schema({
  nom: String,
  prix: String,
  image: String
});

const Product = mongoose.model('Product', productSchema);

const produitsDeTest = [
  {
    nom: "Café en grains - DevStore",
    prix: "12.99 €",
    image: "https://placehold.co"
  },
  {
    nom: "Tasse magique de développeur",
    prix: "19.99 €",
    image: "https://placehold.co"
  },
  {
    nom: "Stickers clavier JS",
    prix: "4.50 €",
    image: "https://placehold.co"
  },
  {
    nom: "Souris ergonomique RGB",
    prix: "49.90 €",
    image: "https://placehold.co"
  }
];

const seedDB = async () => {
  try {
    await connectDB();

    await Product.deleteMany({});
    console.log("Anciens produits supprimés.");

    await Product.insertMany(produitsDeTest);
    console.log("Nouveaux produits de test injectés avec succès !");

    await mongoose.connection.close();
    console.log("Connexion MongoDB fermée.");
  } catch (error) {
    console.error("Erreur pendant l'initialisation :", error);
    process.exit(1);
  }
};

seedDB();