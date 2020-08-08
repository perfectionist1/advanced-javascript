// Falsy Values
    // false
    // 0
    // ""
    // undefined
    // null
    // NaN

// Truthy
    // '0'
    // ' '
    // []
    // -1

//let a = 0;
//let a = false;
//let a = '';
//let a = undefined;
//let a = null;
//let a = NaN;

//let a = [];
// let a = -1;
// if(a){
//     console.log("This is true");
// } else{
//     console.log("This is false");
// }

function truthyOrFalsy(val){
    if(val){
        console.log (`${val} is truthy`);
    } else{
        console.log (`${val} is falsy`);
    }   
}

truthyOrFalsy(false); 
truthyOrFalsy(null);
truthyOrFalsy(0);
truthyOrFalsy('');
truthyOrFalsy(NaN);
truthyOrFalsy(undefined);
truthyOrFalsy(' ');
truthyOrFalsy('0');
truthyOrFalsy([]);
truthyOrFalsy(-1);
