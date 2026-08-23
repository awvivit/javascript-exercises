const filterRange = function(arr, low, high) { 
    return arr.filter((testValue) => {
        if (testValue >= low && testValue <= high) {
            return true; 
        }
        return false; 
    });
};

module.exports = filterRange; 