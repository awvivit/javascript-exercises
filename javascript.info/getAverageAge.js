function getAverageAge(arr) {
    const total =  arr.map((user)=>user.age).reduce((pVal,cVal,a) => pVal + cVal,0);
    const count = arr.length; 
    return total/count; 

}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28