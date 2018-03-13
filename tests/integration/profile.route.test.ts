import * as request from 'supertest';
import app from '../../src/app';
import { validProfile } from '../data/profile.data';

describe('/status', () => {
  describe('GET /', () => {
    it('should allow a valid profile', async () => {
      const { body, status } = await request(app)
        .post('/profile')
        .send(validProfile);
      expect(body).toEqual({});
      expect(status).toBe(200);
    });
    it('should validate the profile', async () => {
      await request(app)
        .post('/profile')
        .send({})
        .expect(400);
    });
  });
});
