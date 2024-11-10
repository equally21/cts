import request from 'supertest';
import app, { server } from './app.js';

describe('CTS tests', () => {

    afterAll(done => {
        server.close(done);
      });

    test('GET /ping returns pong', async () => {
        const response = await request(app).get('/ping');
        expect(response.status).toBe(200);
        expect(response.text).toBe('pong');
    });

});