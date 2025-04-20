// index.js
import express from 'express';
import authRoute from './src/routes/auth.js';
import productRoute from './src/routes/product.js';
import connectDB from './config/db.config.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Connexion à la base de données
connectDB();

// Middleware CORS
app.use(cors({
  origin: 'https://mangi-client.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Preflight requests
app.options('*', cors());

// Parser JSON
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoute);
app.use('/product', productRoute);

// Export handler compatible Vercel
export default (req, res) => {
  app(req, res);
};
