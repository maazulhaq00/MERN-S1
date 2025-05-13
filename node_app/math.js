let add = (a, b) => {
    return a+ b;
}
let sub = (a, b) => {
    return a+ b;
}

// module.exports = add;
// module.exports.add = add
// module.exports.sub = sub
// module.exports = {add, sub}

// export default add;
export {add, sub};
