function solve(args) {
    let x = +args[0];
    x = (x>>3).toString(2);
    y = (1).toString(2);
    console.log(x&y);
}

solve(['15']);
