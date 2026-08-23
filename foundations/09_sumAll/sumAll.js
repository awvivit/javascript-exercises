const sumAll = function(begin, end) {
    let buff = 0;
    
    
    if (!Number.isInteger(begin) || !Number.isInteger(end) || begin < 0 || end < 0) return 'ERROR'; 
    
    for (i = Math.min(begin,end); i < Math.max(begin,end)+1; i++) {
        buff += i; 
    }

    return buff; 
};

// Do not edit below this line
module.exports = sumAll;
