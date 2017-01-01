/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let arr = args;
    arr = arr.map(Number);
    arr=arr.sort(function(a,b){return a-b});

    let min = arr[0];
    let max = arr[arr.length - 1];
    let sum = arr.reduce((a, b) => a + b, 0);
    let avg = sum / arr.length;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}
solve(['-2.45', '-5.556', '1.4567']);