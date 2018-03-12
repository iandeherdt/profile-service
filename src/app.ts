import * as express from 'express';
import * as bodyParser from 'body-parser';
import config from './config/main';
import routes from './routes';

// init express
const app: express.Application = express();

app.use(bodyParser.json({ limit: config.bodyLimit }));
app.use(bodyParser.urlencoded({ extended: true, limit: config.bodyLimit }));

// routes
routes(app);

// Error handlers
// app.use();

export default app;
