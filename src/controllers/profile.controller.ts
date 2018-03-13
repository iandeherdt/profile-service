import { Router, Request, Response } from 'express';
import validator from '../validators/profile.validator';
const validation = require('express-validation');

export default Router({ mergeParams: true })
  .post('/', validation(validator.post), (_req:Request, res: Response) => res.status(200).end());
