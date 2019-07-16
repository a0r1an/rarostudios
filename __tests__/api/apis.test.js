import request from 'supertest'
import newRoutes from '../../pages/api/apis'

describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        // request(newRoutes).get('/fetchYoutube').then((response) => {
        //     expect(response.statusCode).toBe(200);
        //     done();
        // });
    expect(newRoutes()).toBe(200);
          
    });
});