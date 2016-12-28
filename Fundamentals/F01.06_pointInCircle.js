function solve(args) {
    let d = Math.sqrt(args[0] * args[0] + args[1] * args[1]) //точка в окръжност, ако  x² + y² < r²
    if (d > 2) console.log('no ' + d.toFixed(2))
    else console.log('yes ' + d.toFixed(2))
}

