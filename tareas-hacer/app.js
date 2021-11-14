const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } = require("./helpers/inquirer");
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const { guardarDB, leerDb } = require('./helpers/guardarArchivo');
//require("colors");

//const { mostrarMenu, pausa } = require("./helpers/mensajes");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDb();

  if (tareasDB) {
    //Establecere las tareas
    tareas.cargarTareasFromArray(tareasDB);
  }

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
        tareas.listadoCompleto();
        //console.log(tareas._listado);
        break;
      case '3':
        tareas.listarPendientesCompletadas(true);
        break;
      case '4':
        tareas.listarPendientesCompletadas(false);
        break;
      case '5':
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case '6':
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== '0') {
          const ok = await confirmar('¿Esta seguro?');
          if (ok) {
            tareas.borrarTarea(id);
            console.log('Tarea Borrada')
          }
        }
        break
    }

    guardarDB(tareas.listadoArr);

    await pausa();

  } while (opt !== "0");

  //pausa();
};

main();
