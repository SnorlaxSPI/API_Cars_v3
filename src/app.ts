import express from 'express';
import { routesORM } from './routes/routesORM';

import './database';

const app = express();

app.use(express.json());

app.use('/clients', routesORM);

app.listen(3000, () => {
  console.log('🚀🚀 Server Started!');
});

