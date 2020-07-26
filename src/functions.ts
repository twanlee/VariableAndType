// function square(num: number): number {
//     return num * num;
// }
//
// console.log(square(5));

function add(a: number): Function {
    return function (b: number): number {
        return a + b;
    }
}

const addWidth5 = add(5);
console.log(addWidth5(5));
