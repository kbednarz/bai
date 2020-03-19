names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter) {
        // names (array) which starts with the letter
        return new Students(this.names.filter(n => n[0] === letter));
    }

    sort() {
        // names (array) in alphabetical order 
        return new Students([...this.names].sort());
    }

    get() {
        // names (array) in natural order
        return this;
    }

    getFirst(n) {
        // get first 'n' names (array) 
        return new Students(this.names.slice(0, n));
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



