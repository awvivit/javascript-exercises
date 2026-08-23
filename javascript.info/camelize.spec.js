const camelize = require('./camelize');

describe('Camelize', function() {
  test('Camelize this word: word-to-camelize:', function() {
    expect(camelize('word-to-camelize')).toEqual('wordToCamelize');
  });
});
