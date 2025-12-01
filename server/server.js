import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.set("trust proxy", 1);

app.use(cors({
  origin: ["http://localhost:5173", "https://npgctechfest.vercel.app"],
  credentials: true
}));

app.use(express.json());

// IMPORTING ROUTES 
import authRoutes from './routes/authRoutes.js';
import registrationRoutes from './routes/registrationRoutes.js';

app.use('/auth', authRoutes);
app.use('/api/registration', registrationRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));