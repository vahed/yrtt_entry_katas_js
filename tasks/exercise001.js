// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr){
    if (arr === undefined) throw new Error("array is required");
    // Your code here!
    if (arr === undefined) throw new Error("array is required");

    const object = {};
    const result = [];
    const value = null;
    let total = 0;

    arr.forEach(item => {
        if(!object[item])
            object[item] = 0;
        object[item] += 1;
    })

    for (const prop in object) {
        if(object[prop] < 2) {
            result.push(prop);
        }
    }

    for(let index=0; index < result.length; index++){
        total += parseInt(result[index]);
    }

    return total;
}

module.exports = {
    singles
};
