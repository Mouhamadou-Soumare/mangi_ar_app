import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from '../config/db.config.js';
import authRoute from '../src/routes/auth.js';
import productRoute from '../src/routes/product.js';

connectDB(); // Connexion DB

const app = express();

const corsOptions = {
  origin: ['https://mangi-client.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(bodyParser.json());

app.use('/auth', authRoute);
app.use('/product', productRoute);

export default app;
