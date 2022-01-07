
const fs = require("fs");
const colors = require('colors')

const crearArchivo = async (base, hasta ,listar) => {
  let salida = "";

  for (let i = 1; i <= hasta ; i++) {
    salida += base + 'x' + i + '=' + base * i + '\n';
  }
  if (listar) {
    console.log(`######## Tabla del ${base} ########`.rainbow);
    console.log(salida.america);
  }

  try {
    await fs.writeFileSync(`./output/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
