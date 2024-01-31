// index.js

import express from 'express';
import authRoute from './src/routes/auth.js';
import productRoute from "./src/routes/product.js";
import connectDB from './config/db.config.js';
import bodyParser from 'body-parser';
import cors from 'cors'; 

// serveur
const app = express();

// Connexion à la base de données
connectDB();

// Utilisation de bodyParser pour parser le corps des requêtes en JSON
app.use(bodyParser.json());
app.use(cors());

// Utilisation des routes
app.use('/auth', authRoute);
app.use('/product', productRoute); // Utilisez la route du produit

// Middleware pour autoriser les requêtes CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://mangi-client.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Exportez une fonction handler pour Vercel
export default (req, res) => {
  // Votre logique de routage habituelle
  app(req, res);
};
