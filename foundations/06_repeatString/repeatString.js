const repeatString = function(str, num) {
    
    let buffer = ''; 
    let i=0; 

    if (num < 0) return 'ERROR'; 
    
    while (i < num) { 
        buffer += str;
        i++; 
    }

    return buffer; 
};

// Do not edit below this line
module.exports = repeatString;
