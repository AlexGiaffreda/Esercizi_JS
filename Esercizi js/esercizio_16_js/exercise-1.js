class Person{
    firstName = "";
    lastName = "";

constructor(name, surname){
    this.firstName = name;
    this.lastName = surname;
}
}

const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);
