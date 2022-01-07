const { argv } = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabal de multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "La base debe ser de tipo number";
    }
    return true;
  })
  .option("l",{
      alias: 'listar',
      type: 'boolean',
      default: false,
      demandOption: false,
      describe: 'Muestra la tabla en consola'
  })
  .option("h", {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Este es el numero hasta donde quieres la tabla de multiplicar'
  });

module.exports = argv;
