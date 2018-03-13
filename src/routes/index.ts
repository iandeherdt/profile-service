import { Application } from 'express';
import statusRoutes from '../controllers/status.controller';
import profileRoutes from '../controllers/profile.controller';

export default function (app: Application) {
  app.use('/status', statusRoutes);
  app.use('/profile', profileRoutes);
}
