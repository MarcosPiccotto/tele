let datos = [2, 3, 4];
let aux = 0;

//Sumo todos los elems impares
for (let i = 0; i < datos.length; i++) {
    if (datos[i] % 2 === 1) {
        aux += datos[i];
    }
}

console.log(`La suma de los elementos es ${aux}`);
