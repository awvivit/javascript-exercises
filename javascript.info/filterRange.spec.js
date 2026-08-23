const filterRange = require('./filterRange');
const arrayToFilter = [1,2,3,4,5,6,7,8]; 
const low = 3, high = 4; 

describe('Filter Range', function() {
  test('Filter Range', function() {
    expect(filterRange(arrayToFilter, low, high)).toEqual([3,4]);
  });
});
