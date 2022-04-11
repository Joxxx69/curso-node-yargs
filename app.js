const {crearArchivo} = require('./helpers/multiplicar');
const  argv =require('./config/yargs');
require('colors');


// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs ',argv.b)

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo =>console.log(nombreArchivo.rainbow))
.catch(err =>console.log(err))

/* no es recomendao hacer esto por que falta validaciones */
// console.clear();
// console.log(process.argv);
// const [,,arg3 ='base=5'] = process.argv;
// const [,base=5]= arg3.split('=');
// console.log(base)
// console.log(arg3)



/* Ejercicio 1 */
// let base = 5;
// crearArchivo(base)
// .then(nombreArchivo =>{
//     console.log('todo bien')
//     console.log(nombreArchivo)
// } )
// .catch(err =>{ 
//     console.log('Todo mal')
//     console.log(err)

// })


   

/* non - blocking */
// fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
//     if(err) throw err;
//     console.log('archivo creado');  
// });

/* Blocking */

// fs.writeFileSync(`tabla-${base}.txt`,salida);
// console.log(`tabla-${base}.txt creada`)





