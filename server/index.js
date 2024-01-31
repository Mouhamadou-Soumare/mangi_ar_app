// app.js
import express from 'express';
import authRoute from './src/routes/auth.js';
import productRoute from "./src/routes/product.js";
import connectDB from './config/db.config.js';
import bodyParser from 'body-parser';
import cors from 'cors'; 

// Connexion à la base de données
connectDB();

// Création de l'application Express
const app = express();

// Utilisation de bodyParser pour parser le corps des requêtes en JSON
app.use(bodyParser.json());
app.use(cors());

// Utilisation des routes
app.use('/auth', authRoute);
app.use('/product', productRoute); // Utilisez la route du produit

// Exportez une fonction handler
export default (req, res) => {
  // Votre logique de routage habituelle
  app(req, res);
};
