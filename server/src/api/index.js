import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from "../models/db.config.js";
import authRoute from "../routes/auth.js";
import productRoute from "../routes/product.js";

// Connexion BDD
connectDB();

const app = express();

// CORS config - DOIT être au tout début
const corsOptions = {
  origin: 'https://mangi-client.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // gestion des preflight

app.use(bodyParser.json());

app.use('/auth', authRoute);
app.use('/product', productRoute);

// Export du handler pour Vercel
export default app;
