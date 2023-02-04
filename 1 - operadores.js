/**
 * Para || y para && Javascript considera que esto es lo mismo que false:
 * 
 * false
 * null
 * undefined
 * 0
 * NaN
 * "" 
 * 
 * Todo lo demás, es true
 */

// Operador || 
console.log(false || true); // true
console.log(true || false); // true
console.log(true || "string"); // true
console.log("string" || true); // string
console.log("" || true); // true
console.log(0 || "Hola!"); // Hola!
console.log("Hola!" || "Adiós!"); // Hola!
console.log({} || "Último ejemplo"); // {}

// Operador &&
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true
console.log(true && "ejemplo"); // ejemplo
console.log("ejemplo" && true); // true
console.log("Hola!" && "Adiós!"); // Adiós!
console.log(false && "Texto de prueba"); // false
var prueba = 0 && true;
console.log(prueba); // 0

// El Nullish coalescing sólo considera "false":
// undefined
// null
//
// Todo lo demás lo trata como un true

// Operador ??
console.log(false ?? true); // false
console.log(0 ?? true); // 0
console.log("string" ?? false); // string
console.log(null ?? "prueba texto"); // prueba texto
var pruebaVariableNoDefinida;
console.log(pruebaVariableNoDefinida || "Última prueba");

// Sintaxis: expresion1 ?? expresion2 
// Si la expresion1 es null o undefined -> devuelve la expresion2
// En el resto de caso se queda con la expresion1