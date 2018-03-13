import * as request from 'supertest';
import app from '../../src/app';

describe('/status', () => {
  describe('GET /', () => {
    it('should succesfully accept the status call', async () => {
      await request(app)
        .get('/status')
        .expect(204);
    });
  });
});
