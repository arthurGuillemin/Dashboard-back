const app = express();

import dotenv from 'dotenv';
import cors from "cors";
import express from "express";
import path from "path";





const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

import userRoutes from "./Routes/UserRoutes.js";
import BookRoutes from "./Routes/BookRoutes.js";
import courseRoutes from "./Routes/CoursesRoutes.js";
import EventRoutes from './Routes/EnventRoutes.js' 
app.use('/users', userRoutes);
app.use('/books', BookRoutes);
app.use('/courses', courseRoutes);
app.use('/events', EventRoutes);



app.listen(3000, '0.0.0.0', () => {
  console.log('Serveur démarré sur http://0.0.0.0:3000');
});
