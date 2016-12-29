/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];
    let bigest = Math.max(a, b, c);
    console.log(bigest);
}
solve([" -2 ", " 4 ", " -1 "]);
