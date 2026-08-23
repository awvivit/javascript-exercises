const filterUnique = function(arr) { 
    // Clone the array to avoid mutating the original data
  const uniqueSet = new Set(arr);
  
  return [...uniqueSet];
  
};

module.exports = filterUnique; 