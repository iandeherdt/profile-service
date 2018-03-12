import { Application } from 'express';
import statusRoutes from '../controllers/statusController';

export default function (app: Application) {
  app.use('/status', statusRoutes);
}
