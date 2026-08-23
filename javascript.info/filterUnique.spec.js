const filterUnique = require('./filterUnique');
const arrayToShuffle = [1,2,3,3,4,6,7,1,9]; 


describe('filterUnique', function() {
  test('filterUnique', function() {
    filterUnique(arrayToShuffle);
  });
});