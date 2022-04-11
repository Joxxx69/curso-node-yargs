const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type:'number',
                    demandOption: true,
                    description:'es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    default:false,
                    describe:'Muestra la tabla en consola'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    default:10,
                    description:'es el numero de multiplicaciones en la tabla'
                })
                .check((argv,options)=>{
                    if(isNaN(argv.h)){throw 'tiene que ser un numero'}
                    return true;
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){ throw 'la base tiene que ser un numero'};
                    return true;
                })
                .argv;
module.exports = argv;