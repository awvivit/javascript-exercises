const sortDecending = require('./sortDecreasingOrder');
const arrayToSort = [1,2,3,4]; 


describe('Sort Descending', function() {
  test('Sort Descending', function() {
    expect(sortDecending(arrayToSort)).toEqual([4,3,2,1]);
  });
});