const fs = require('fs');

const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
        try {

            console.log('=====================');
            console.log(`Tabla del: ${base}`);
            console.log('=====================');

            let salida = '';

            for (let i = 0; i <= 10; i++) {
                salida += `${base} x ${i} = ${base * i}\n`;
            }

            console.log(salida);
            fs.writeFileSync(`tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);

        } catch (err) {
            throw err;
        }

    })

}

module.exports = {
    crearArchivo
}

