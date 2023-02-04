let usuario = {
    direccion: {
        calle: "Calle de prueba",
    },
    nombre: "Fran",
}

// Codigo problemático
// console.log(usuario.coche.marca);

// Solución clásica
console.log(usuario && usuario.direccion && usuario.direccion.calle); // Calle de prueba
console.log(usuario && usuario.coche && usuario.coche.marca); // undefined

// Solución más moderna
console.log(usuario?.direccion?.calle); // Calle de prueba
console.log(usuario?.coche?.marca); // undefined