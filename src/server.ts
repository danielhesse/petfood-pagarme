import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import { routes } from './routes';

const server = express();

mongoose.connect('mongodb://localhost/petfood');

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(routes);

server.listen(3333, () => {
  console.log('🚀 Server running on port 3333!');
});
