const { crearArchivo } = require('./helpers/multiplicar');

console.clear()
//5 x 1 =5
//5 x 2 =10
//5 x 3 =15

const base = 17;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));