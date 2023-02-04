// Ejemplo ternario
let age = 20;
let canDrive = age >= 18 ? "Sí" : "No";
console.log(canDrive);

// Otro ejemplo de ternario
let time = new Date();
let hours = time.getHours();
let saludo = hours < 12 ? "Buenos días" : "Buenas tardes";
console.log(saludo);

// Ternarios encadenados (poco recomendable)
let nota = 6.5;
let mensaje = nota < 5 ? "Suspenso" : nota < 7 ? "Bien" : nota < 9 ? "Notable" : "Sobresaliente";
console.log(mensaje);