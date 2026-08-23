const copySort = require('./copySort');
const arrayToSort = [3,4,1,2]; 


describe('Sort', function() {
  test('Sort', function() {
    expect(copySort(arrayToSort)).toEqual([1,2,3,4]);
  });
});