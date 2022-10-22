const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
        setTimeout(() => {
            res('This is done!');
        })
    }, 2000);
})

promise.then(data => {
    data.split(' ');
})

function merge<T extends object, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const a = {
    name: 'Peter',
    age: 44,
}
const b = {
    age: 30
}

console.log(merge(a, b));

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(el: T,) {
    let descText = 'No value';
    if (el.length === 1) {
        descText = `Got ${el.length} element`;
    } else if (el.length > 1) {
        descText = `Got ${el.length} elements`;
    }
    return [el, descText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Peter');
textStorage.addItem('Smith');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>()


interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createGoal(title: string, desc: string, date: Date): CourseGoal {
    return { title, description: desc, completeUntil: date }
}