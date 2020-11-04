// The clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make the 'past' function return the time converted to milliseconds.
// More examples in the test cases below.

function past(h, m, s){
    // Your code here!
    var hToMil = h * 60 * 60 *1000;
    var mToMil = m * 60 *1000;
    var sToMil = s * 1000;
    console.log(hToMil+mToMil+sToMil + " Milliseconds");
}

module.exports = {
    past
};
