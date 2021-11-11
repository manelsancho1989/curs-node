const { resolve } = require("path");

require("colors");

const mostrarMenu = async () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("======================".green);
    console.log("Seleccione una opción".green);
    console.log("======================\n".green);

    console.log(`${"1.".green} Crear una tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tareas (s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opcion: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".green}\n`, (opt) => {
      readline.close();
      resolve();
    });
  });
};
module.exports = {
  mostrarMenu,
  pausa,
};
