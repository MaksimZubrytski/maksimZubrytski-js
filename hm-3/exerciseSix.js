let a = process.argv[2];
let b = process.argv[3];

let c = function (a, b) {
    return -b / a;
}

console.log(c(a, b));