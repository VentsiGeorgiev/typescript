function add(a: number, b: number) {
    return a + b;
}

// void means that this function doesn't have a return statement;
function printResult(num: number): void {
    console.log('Result: ' + num);
}

let sumItems: (x: number, y: number) => number;

sumItems = add;
sumItems(5, 5);

printResult(add(1, 2));

// Callback

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 30, (result) => {
    console.log(result);
});