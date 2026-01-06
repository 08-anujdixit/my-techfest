import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://npgctechfest.vercel.app"],
  credentials: true
}));

app.use(express.json());

// IMPORTING ROUTES 
import registrationRoutes from './routes/registrationRoutes.js';
import dataRoutes from './routes/dataRoutes.js';

app.use('/api/registration', registrationRoutes);
app.use('/api/fetchdata', dataRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));