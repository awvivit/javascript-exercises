const sumAll = function(begin, end) {
    let buff = 0;
    
    if (isNaN(parseInt(begin)) || isNaN(parseInt(end))) return 'ERROR'; 
    if (begin < 0 || end < 0) return 'ERROR'; 
    
    
    for (i = begin; begin < end++; i++) {
        buff += i; 
    }

    return buff; 
};

// Do not edit below this line
module.exports = sumAll;
