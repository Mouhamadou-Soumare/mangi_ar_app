// index.js

import express from 'express';
import authRoute from './src/routes/auth.js';
import productRoute from "./src/routes/product.js";
import connectDB from './config/db.config.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Connexion à la base de données
connectDB();

// Middleware
app.use(cors({
  origin: 'https://mangi-client.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());

// Routes
app.use('/auth', authRoute);
app.use('/product', productRoute);

// Middleware CORS fallback (facultatif si cors() est bien configuré)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://mangi-client.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Export pour Vercel (serverless handler)
export default (req, res) => {
  app(req, res);
};