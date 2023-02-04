// Operador ||
console.log(false || true); // retorna true.
console.log(false || "string"); // retorna "string".
console.log(true || "string"); // retorna true.
console.log("string1" || "string2"); // retorna "string1".
// ...

/**
Es importante destacar que en JavaScript:
    false
    null 
    undefined
    0
    NaN
    "" (cadena vacía) 
Se consideran falsos, mientras que cualquier otro valor es considerado verdadero.
Por lo tanto, si se evalúa una expresión que contiene un valor verdadero,
se retornará ese valor sin evaluar la segunda expresión.
*/

// Ejemplo
let errorMessage = null;
let message = errorMessage || "No hay errores";
console.log(message); // "No hay errores"

errorMessage = "Ha ocurrido un error";
message = errorMessage || "No hay errores";
console.log(message); // "Ha ocurrido un error"



// Operador &&
console.log(false && true); // retorna false.
console.log(false && "string"); // retorna false.
console.log(true && "string"); // retorna "string".
console.log("string1" && "string2"); // retorna "string2".
// ...


/**
Al igual que con el operador ||, en JavaScript:
    false
    null 
    undefined
    0
    NaN
    "" (cadena vacía) 
Se consideran falsos, mientras que cualquier otro valor es considerado verdadero.
Por lo tanto, si se evalúa una expresión que contiene un valor falso,
se retornará ese valor sin evaluar la segunda expresión.
*/

// Ejemplo
let isLoggedIn = true;
let user = isLoggedIn && "Fran linde";
console.log(user); // "Fran linde"

isLoggedIn = false;
user = isLoggedIn && "Fran linde";
console.log(user); // false


// Operador ??
console.log(false ?? true); // retorna false.
console.log(null ?? "string"); // retorna "string".
console.log(undefined ?? "string"); // retorna "string".
console.log(0 ?? "string"); // retorna 0.
// ...

// Sintaxis:
// expression1 ?? expression2
// Si expression1 es null o undefined, se devolverá expression2.
// Si expression1 tiene un valor diferente a null o undefined, se devolverá expression1.

// Ejemplo
let nombre = "John";
let displayName = nombre ?? "Desconocido";
console.log(displayName); // "John"

let age;
let displayAge = age ?? 25;
console.log(displayAge); // 25

