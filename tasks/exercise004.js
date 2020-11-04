// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    // You code here!
    let firstChar = [];
    let lastCharOfWord = [];
    let concatEndOfWord = [];

    newstr = str.split(" ");

    for(i=0; i<newstr.length; i++){
        firstChar.push(newstr[i].charAt(0));
        lastCharOfWord.push(newstr[i].charAt(newstr[i].length-1));
        concatEndOfWord.push(newstr[i].charAt(0).concat('ay'));
    }

    let slicedArr = newstr.map(value => value.slice(1));

    let result = slicedArr.map(function (value, index) {
        return value + String(concatEndOfWord[index])
    })

    var newArray = result.reduce(function(a, b) {
        return a + " " + b;
    });
    return console.log(String(newArray));
}

module.exports = {
    pigLatin
};
