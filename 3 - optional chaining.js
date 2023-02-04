let user = {
    name: "John",
    age: 30,
};
console.log(user?.name); // "John"

let address = user?.address?.street;
console.log(address); // undefined

// El signo de interrogación antes de la flecha (.) 
// indica que la propiedad sólo se accederá si el objeto existe y no es null o undefined