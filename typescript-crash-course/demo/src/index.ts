let id: number = 5;
let company: string = 'My app';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number;
age = 30;

let ids: number[] = [1,2,3,4,5];
// ids.push('x2ax-x21x-xa2d') # Error

let arr: any[] = [1,2,'3','4'];

// # Tuple
let person: [number, string, boolean] = [1, 'John', true];
// let person: [number, string, boolean] = [1, true,'John']; // # Error

// # Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Anne'],
    [2, 'Jane'],
]

// # Union
let productId: string | number = 22;
let productId1: string | number = "22";

// # Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction1.Up);
console.log(Direction1.Left);

// # Enum
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(Direction2.Right);

// # Objects
type User = {
    id: number,
    name: string
}


const user: User = {
    id: 1,
    name: 'John'
};

// # Type Assertion
let cid: any = 1;
let customerId = <number>cid
// customerId = true; # Error

// # Functions
function sumNum(a: number, b: number): number {
    return a + b;
}

function log(message: string | number): void {
    console.log(message)
}

// function sumNums(a,b){
//     return a + b;
// }

// # Interfaces
interface Person {
    readonly id: number;
    name: string;
    age?: number
}

const user1: Person = {
    id: 1,
    name: 'John',
}

type Point = number | string
const p1: Point = 1;


interface MathFunc {
    (x: number, y: number): number
}

const sum: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// # Classes

// - interface
interface PetInterface {
    name: string;
    petAge: number;
    register(): string;
}


class Pet implements PetInterface{
    name: string
    petAge: number

    constructor(name: string, petAge: number){
        this.name = name;
        this.petAge = petAge;
    }

    register(){
        return `${this.name} is now register`;
    }

}

const tom = new Pet('Tom', 2);
// tom.name = 'Tomy' # Error / class Pet - private name: string

console.log(tom.register());

// Subclasses
class Dogs extends Pet {
    breed: string

    constructor(name: string, petAge: number, breed: string){
        super(name, petAge);
        this.breed = breed;
    }
}

const dog = new Dogs('Ollie', 3, 'Retriever');

// Generics
// # 1
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3,4,5]);
let strArr = getArray<string>(['a','b','c']);

// numArr.push('d') / Error

// // # 2
// function getArray1(items: any[]): any[] {
//     return new Array().concat(items)
// }

// let numArr1 = getArray1([1,2,3,4,5]);
// let strArr1 = getArray1(['a','b','c']);

// numArr1.push('d'); // !OK

