const options = require("yargs");

const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')

console.clear();

// console.log(process.argv);
//console.log(argv);

crearArchivo(argv.base , argv.hasta, argv.listar)
        .then(archivo=> console.log(archivo,' archivo creado correctamente' ) )
        .catch(err => console.log(err))
