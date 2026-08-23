const leapYears = function(testYear) {
    const byFour = !(testYear % 4); 
    const byHundred = !(testYear % 100); 
    const by4Hundred = !(testYear % 400); 

    if (by4Hundred) return true; 
    if (byFour && !byHundred) return true; 

    return false; 
};

// Do not edit below this line
module.exports = leapYears;
