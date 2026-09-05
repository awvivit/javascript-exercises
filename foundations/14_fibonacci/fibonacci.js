const fibonacci = function(n) {
    let num;

    if (typeof n !== 'number') {
        num = parseInt(n);
    } else {
        num = n; 
    }
     

    if (num < 0) return "OOPS"; 
    if (num === 0) return 0; 
    if (num === 1 || num === 2) return 1; 

    let tot = 0; 
    let p1 = 1; 
    let p2 = 1; 

    // i =2 is actually the n=3 in this context
    for (i = 2; i < num; i++) {
        tot = p1 + p2;
        p1 = p2; 
        p2 = tot; 
    }

    return tot; 
    
};

// Do not edit below this line
module.exports = fibonacci;
