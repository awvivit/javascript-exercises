const camelize = function(str) { 
    const strArray = str.split('-'); 
    return strArray.map((strSection, i) => {
        if (i !== 0) {
        
            return [...strSection.slice(0,1).toUpperCase(), ...strSection.slice(1)].join("");  
        } else {
            return strSection; 
        }
    }).join("");  
};

module.exports = camelize; 