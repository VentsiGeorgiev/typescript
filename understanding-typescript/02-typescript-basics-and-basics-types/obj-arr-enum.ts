function add(a: number, b: number, showResult: boolean, phrase: string){
    return a + b;
}

const num1 = 1;
const num2 = 2;
const printResult = true;
const resultPhrase = 'Result is: '

add(num1, num2, printResult, resultPhrase);

// const person1: object = {
//     name: 'John',
//     age: 31,
// }
// const person2: {} = {
//     name: 'Mary',
//     age: 31,
// }

enum Access {ADMIN, READ_ONLY, USER};

const person: {
    name: string;
    age: number;
    skills: string[];
    role: [number, string]; // tuple
    access: Access.ADMIN;
} = {
    name: 'Peter',
    age: 30,
    skills: ['HTML & CSS', 'JavaScript', 'TypeScript'],
    role: [2, 'author'], // tuple
    access: Access.ADMIN

}
console.log(); 