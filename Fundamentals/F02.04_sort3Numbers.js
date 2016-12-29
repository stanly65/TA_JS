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

    console.log(third + ' ' + second + ' ' + first)
}

solve([" -2 ", " 4 ", " -1 "]);