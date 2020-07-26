function add(a) {
    return function (b) {
        return a + b;
    };
}
const addWidth5 = add(5);
console.log(addWidth5(5));
//# sourceMappingURL=functions.js.map