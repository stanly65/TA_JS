/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let n = +args[0];
    let r = '';
    for (let i = 1; i <= n; i++) {
        r +=(i+' ');
    }
    console.log(r);
}
solve(['10']);