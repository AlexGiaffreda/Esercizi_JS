const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

//"modificcando l'oggetto person2, viene modificato anche person1, perchè con person2 = person1, viene assegnato lo stesso riferimento all'indirizzo di memoria"//

// Modify the property firstName of the person2 in "Simon".

console.log(person1);
console.log(person2);