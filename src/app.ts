import express from 'express';
import { routesPrisma } from './routes/routesPrisma';

const app = express();

app.use(express.json());

app.use('/clients', routesPrisma);

app.listen(3000, () => {
  console.log('🚀🚀 Server Started!');
});

