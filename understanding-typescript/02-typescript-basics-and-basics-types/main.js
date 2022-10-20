// Union type
function combine(a, b) {
    var result;
    if (typeof a === 'number' && typeof b === 'number') {
        result = a + b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
}
var combineWithNums = combine(10, 20);
console.log(combineWithNums);
var combineWithStr = combine('He', 'llo');
console.log(combineWithStr);
