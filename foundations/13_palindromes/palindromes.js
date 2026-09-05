const palindromes = function (strPal) {
    //removes the punctuation and spaces and makes lowercase
    const pArray = Array.from(strPal.toLowerCase().replace(/[^\w\s]|_|\s+/g, "")); 

    
    return pArray.toReversed().every((val,i) => val === pArray[i]); 
};

// Do not edit below this line
module.exports = palindromes;
