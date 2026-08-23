const shuffleArry = function(arr) { 
    // Clone the array to avoid mutating the original data
  const shuffled = [...arr]; 
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at indices i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
  
};

module.exports = shuffleArry; 