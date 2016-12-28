function solve(args) {
const a = Math.abs(+args[0]);
const b = Math.abs(+ args[1]);
const h = Math.abs(+args[2]);
const area = 0.5*(a+b)*h;
console.log(area.toFixed(7));
}

solve(['8.5', '4.3', '2.7']);