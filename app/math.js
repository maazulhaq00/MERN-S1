// #1
// let add = (a, b) => {
//     return a + b;
// }

// module.exports = add;

// #2
// let add = (a, b) => {
//     return a + b;
// }

// let mult = (a, b) => {
//     return a * b;
// }

// module.exports = add;
// module.exports = mult; // mult is export by default

// #3
let add = (a, b) => {
    return a + b;
}

let mult = (a, b) => {
    return a * b;
}

// module.exports.add = add
// module.exports.mult = mult

module.exports = { add, mult }





