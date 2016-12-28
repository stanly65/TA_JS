/**
 *
 * @param {string[]} args
 */

function solve(args) {
    var x = (Math.floor(args[0] /100))%10;
    if ( x == 7) console.log('true');
    else console.log('false ' + x);
}

