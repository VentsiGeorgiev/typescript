// Advanced Types

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startData: Date;
}

type ElevatedEmployee = Admin & Employee;

const emp1: ElevatedEmployee = {
    name: 'Peter',
    privileges: ['create-server'],
    startData: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmpInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
}

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}

// # Type casting
const paragraphEl = document.getElementById('message');
// const inputInputEl = <HTMLInputElement>document.getElementById('user')!;
const inputInputEl = document.getElementById('user')! as HTMLInputElement;

inputInputEl.value = 'Hi there!';


// # Index properties
interface ErrorContainer {
    [prop: string]: string;
}

const formErrors: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Username is required'
};