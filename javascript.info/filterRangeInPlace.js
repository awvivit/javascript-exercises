const filterRangeInPlace = function(arr, low, high) { 
    for(let i = 0; i < arr.length; i++) {
        const elem = arr[i]; 
        if (elem < low || elem > high) { 
       
            arr.splice(i,1); 
            i--;
        }
    };
};

module.exports = filterRangeInPlace; 