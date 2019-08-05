import axios from 'axios';

describe('Test the youtube api', () => {
    test('It should response the GET method', async () => {
      var ytFetch = await axios.get('http://localhost:3000/api/youtube');
      expect(ytFetch.status).toBe(200);
    })
});

describe('Test the soundcloud api', () => {
  test('It should response the GET method', async () => {
    var scFetch = await axios.get('http://localhost:3000/api/youtube');
    expect(scFetch.status).toBe(200);
  })
});

describe('Test the sanity api', () => {
  test('It should response the GET method', async () => {
    var scFetch = await axios.get('http://localhost:3000/api/sanity');
    expect(scFetch.status).toBe(200);
  })
});