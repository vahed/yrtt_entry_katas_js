// The clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make the 'past' function return the time converted to milliseconds.
// More examples in the test cases below.

function past(h, m, s){
    // Your code here!
    let hToMil = h * 60 * 60 *1000;
    let mToMil = m * 60 *1000;
    let sToMil = s * 1000;
    let convetedToMillisecond =  hToMil+mToMil+sToMil;

    return convetedToMillisecond;
}

module.exports = {
    past
};
