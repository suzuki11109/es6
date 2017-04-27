export class Profile {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        return "Hello My name is " + this.name + " I'm " + this.age + " years old";
    }
}