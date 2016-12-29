/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];
    let first = Math.min(a, b, c);
    let third = Math.max(a, b, c);
    let second = (a + b + c) - (first + third);
    if (first > 0 || second < 0 && third > 0) {
        console.log('+')
    } else if (first == 0 || second == 0 || third == 0) {
        console.log('0');
    } else {
        console.log('-')
    }
}
solve([" -2 ", " 4 ", " -1 "]);