/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let x = +args[0];
    let y = +args[1];
    let c = '';
    let r = '';
    //окръжност с център {1,1} и радиус 1.5 (точка в окръжност, ако  x² + y² <= r²)
    if ((x-1) *(x-1) + (y-1) *(y-1) <= 2.25) {         //привеждам координатите към 0,0
        c = 'inside circle ';
    } else {
        c = 'outside circle ';
    }
    //правоъгълник с координати: top= 1, left= -1, width = 6, height = 2;
    if (x >= -1 && x <= 5 && y >= -1 && y <= 1) {
        r = 'inside rectangle';
    } else {
        r = 'outside rectangle';
    }
    console.log(c+r);
}

solve(['2.5', '1']);
solve(['1', '2']);