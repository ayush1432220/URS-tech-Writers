import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
  });
});

app.use('/api/contact', contactRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

app.use((error, _req, res, _next) => {
  const statusCode = error.statusCode || error.status || (error.name === 'ValidationError' ? 400 : 500);
  const message =
    error.name === 'ValidationError'
      ? Object.values(error.errors).map((item) => item.message)[0]
      : error.message;

  console.error('[error]', {
    message,
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
  });

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? 'Internal server error' : message,
  });
});

const startServer = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error('MONGO_URI environment variable is required');
    }

    await mongoose.connect(MONGO_URI);
    console.info('[database] MongoDB connected');

    app.listen(PORT, () => {
      console.info(`[server] Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('[startup] Failed to start server', error.message);
    process.exit(1);
  }
};

startServer();
