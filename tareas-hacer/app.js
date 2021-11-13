const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

//require("colors");

//const { mostrarMenu, pausa } = require("./helpers/mensajes");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        //Crear opcion
        const desc = await leerInput('Descripción: ');
        tareas.crearTarea(desc);
        console.log(desc);
        break;
      case '2':
        console.log(tareas._listado);
        break;

    }
    await pausa();

  } while (opt !== "0");

  //pausa();
};

main();
