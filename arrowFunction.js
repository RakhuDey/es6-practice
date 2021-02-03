const doubleIt = (num) => num * 2;
const add = (x, y) => x + y;
const give = () => 5;

const result = add(5, 7);
console.log(result);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
};
const result2 = doMath(15, 7);
console.log(result2);