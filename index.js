import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import cors from 'cors';

//routes import 
import authRoutes from './routes/auth.route.js'
import categoryRoutes from "./routes/category.route.js";

dotenv.config();

connectDB();

const app = express();

//midleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);


app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
