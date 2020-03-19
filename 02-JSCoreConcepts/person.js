class Person {
    constructor(firstname, surname) {
        this.firstname = firstname;
        this.surname = surname;
    }
}

Person.prototype.name = function() {
    return `${this.firstname} ${this.surname.toUpperCase()}`;
};

Person.prototype.initials = function() {
    return `${this.firstname[0].toUpperCase()}.${this.surname[0].toUpperCase()}.`;
};

// program
jn = new Person('Jan','Nowak');
kb = new Person('Kamil','Be');

console.log(jn.name());
console.log(jn.initials());
console.log();
console.log(kb.name());
console.log(kb.initials());