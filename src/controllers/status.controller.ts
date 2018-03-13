import { Router, Request, Response } from 'express';

export default Router({ mergeParams: true })
  .get('/', (_req:Request, res: Response) => res.status(204).end());


