// interfaces - describes the structure of an object.
interface Person {
    name: string;
    age?: number; // optional

    greet(phrase: string): void;
}

let user: Person;
user = {
    name: 'Max',
    age: 20,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};


user.greet('Hi there I am')