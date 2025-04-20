// config/db.config.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Clé secrète pour JWT
export const secretKey = process.env.SECRET_KEY;

//Connexion à la base de données 
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connexion à la base de données établie');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error.message);
    process.exit(1);
  }
};


export default connectDB;
