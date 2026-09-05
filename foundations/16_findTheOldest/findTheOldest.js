//This works but the solution they have is to use a function to figure out the age. 
// That would probably be better and be eaisier to maintain. 

//I updated my to do so. 

const getAge = function(birth, death) { 
    const now = new Date().getFullYear(); 
    
    return ((death || now) - birth)


}

const findTheOldest = function(arrPeople) {

    arrPeople.sort((firstPerson,secondPerson)=>{
        const firstPersonAge = getAge(firstPerson.yearOfBirth, firstPerson.yearOfDeath);
        const secondPersonAge = getAge(secondPerson.yearOfBirth, secondPerson.yearOfDeath); 

        return secondPersonAge - firstPersonAge; 
    });

    return arrPeople[0]; 
    
};

// Do not edit below this line
module.exports = findTheOldest;
