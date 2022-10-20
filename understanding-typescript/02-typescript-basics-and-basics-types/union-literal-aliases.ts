// Type Aliases / Custom Type
type Combinable = number | string;

// Union type & Literal Types
function combine(a: number | string, b: Combinable, resultConversion: string) {
    let result
    if (typeof a === 'number' && typeof b === 'number') {
        result = a + b
    } else {
        result = a.toString() + b.toString()
    }
    if (resultConversion === 'as-number') {
        return Number(result)
    } else {
        return result.toString()
    }
}

const combineWithNums = combine(10, 20, 'as-number')
console.log(combineWithNums)

const combineWithStr = combine('He', 'llo', 'as-string')
console.log(combineWithStr);
