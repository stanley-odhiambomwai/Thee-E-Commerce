import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './Database/Db.js';
import authRoutes from './Routes/Auth.js';
import productRoutes from './Routes/Product.js';
import cartRoutes from './Routes/Cart.js';
import orderRoutes from './Routes/Order.js';
import { errorHandler, notFound } from './Middleware/ErrorMiddleware.js';




const app = express();
connectDB();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
