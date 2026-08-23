const removeFromArray = function(arr) {
    const agrs = [...arguments]; 
    return arr.filter((t)=> !agrs.includes(t))
};

// Do not edit below this line
module.exports = removeFromArray;
