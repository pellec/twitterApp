module App {

    export class Animal {
        constructor(public age: number, public name: string) {
        }

        saySomething() {
            throw Error('do not call this!');
        }
    }

    export class Dog extends Animal {
        constructor(public age: number, public name: string) {
            super(age, name);
        }

        saySomething() {
            alert('woff');
        }

    }
}

var d = new App.Dog(1, 'fido');
d.saySomething();