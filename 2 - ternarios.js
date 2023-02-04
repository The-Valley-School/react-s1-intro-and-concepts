// Ejemplo
let age = 20;
let canDrive = age >= 18 ? "Sí" : "No";
console.log(`¿Puede conducir?`);
console.log(canDrive); // Sí

// Ejemplo
let time = new Date().getHours();
let saludo = time < 12 ? "Buenos días" : "Buenas tardes";
console.log(saludo); // "Buenas tardes", por ejemplo

// Resumen
// condition ? valueIfTrue : valueIfFalse;

// Podemos encadenar, pero complica mucho...
let score = 75;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(`Tu calificación es ${grade}`); // "Tu calificación es C"
