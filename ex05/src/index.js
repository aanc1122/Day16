class Microsoft {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;

    }
    set name(newName) {
        this._name = newName;

    }
    occupation() {
        return `${this._name} is a philanthropist!`;
    }
}
class Facebook extends Microsoft {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    studentAge() {
        return `${this.name} is ${this.age}`;
    }
    
}
let henry = new Microsoft("William Henry Gates III");
henry.occupation();
console.log(henry.occupation());
let elliot = new Facebook("Mark Elliot Zuckerberg", 23);
elliot.occupation();
console.log(elliot.occupation());
elliot.studentAge();
console.log(elliot.studentAge());

module.exports = {
    Microsoft,
    Facebook
}
