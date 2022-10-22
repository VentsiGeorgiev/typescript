function Logger() {
    return function (constructor: Function) {
        console.log('Logging...');
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    }
}

@Logger()
@WithTemplate('<h1>My Person Object</h1>')
class Person {
    name = 'Peter';
    constructor() {
        console.log('Creating person object..');

    }
}

const pers = new Person();

console.log(pers);
