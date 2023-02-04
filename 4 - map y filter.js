// EJEMPLO 1 MAP
let numbers = [1, 2, 3, 4, 5];
let double = numbers.map((value) => {
    return value * 2;
});
console.log(numbers);
console.log(double);

// EJEMPLO 2 MAP
let people = [{
    name: "Fran",
    age: 31,
}, {
    name: "Edu",
    age: 30,
}];

let peopleMayusc = people.map((person) => {
    // COPIA DEL OBJETO ORIGINAL
    let newPerson = {...person};
    newPerson.name = newPerson.name.toUpperCase();
    return newPerson;
});
console.log(people);
console.log(peopleMayusc);

// EJEMPLO FILTER
let words = ["Hola!", "Qué tal estás?", "Ey"];
let longWords = words.filter((word) => {
    return word.length > 3;
});
console.log(words);
console.log(longWords);
