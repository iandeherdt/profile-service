import './config/env';

import { logger } from './lib/logger';
import config from './config/main';
import app from './app';

app.listen(config.port, () => {
  logger.info(`Server listening on port ${config.port}`);
});
