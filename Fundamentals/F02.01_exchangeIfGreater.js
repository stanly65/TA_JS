/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let a = +args[0];
    let b = +args[1];
    if (b > a) {
        console.log(a + ' ' + b);
    } else {
        console.log(b + ' ' + a);
    }
}

solve([' 5 ', ' 2 ']);
solve([" 3 ", " 4 "]);