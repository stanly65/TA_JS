/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];
    let d = +args[3];
    let e = +args[4];
    let bigest = Math.max(a, b, c, d, e);
    console.log(bigest);
}

solve(['-3', '-0.5', '-1.1', '-2', '-0.1']);