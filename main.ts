import {Persona} from './persona';
import {Direccion} from './direccion';
import {Telefono} from './telefono';
import {Mail} from './mail';


let direccionD01 = new Direccion("Golondrina", 7, 4, "A", "11659", "Puerto Serrano", "Cadiz");
let direccionD02 = new Direccion("Duero", 15, 4, "B", "41010", "Sevilla", "Sevilla");
let direccionD03 = new Direccion("Guadalete", 25, 1, "A", "28017", "Madrid", "Madrid");

let nuevaDireccion = new Direccion("Violeta", 7, 7, "A", "28027", "Madrid", "Madrid");


let mailM01 = new Mail("Personal", "pnieto@gmail.com");
let mailM02 = new Mail("Trabajo", "jnortega@fontaneriadeconfianza.es");
let mailM03 = new Mail("Personal", "juan.carrero@gmail.com");

let nuevoMail = new Mail("personal", "ptosevilla@gmail.com")


let telefonoT01 = new Telefono("Movil", 658236987);
let telefonoT02 = new Telefono("Fijo", 915896325);
let telefonoT03 = new Telefono("Movil", 789456123);

let nuevoTelefono = new Telefono("Movil", 652741852);



let persona1 = new Persona("Patricia", "Nieto Naranjo", 30, "12345678A", "20 de junio", "verde", "Femenino", direccionD01,
 mailM01, telefonoT01, "Compañera de colegio");
let persona2 = new Persona("Jose", "Narvaez Ortega", 52, "87654321B", "5 de marzo", "Negro", "Masculino", direccionD02,
 mailM02, telefonoT02, "Fontanero");
let persona3 = new Persona("Juan", "Carrero Barrera", 15, "74185296C", "21 de septiembre", "Blanco", "Masculino", direccionD03,
mailM03, telefonoT03, "Hijo vecina");


 let arrayPersonas: Persona[] = [persona1, persona2, persona3];


 function mostrarLista():void{
    for (let i=0; i < arrayPersonas.length; i++){
        arrayPersonas[i].mostrarPersona();
    }
 }


// Primer listado de las tres personas
console.log("\n\nListado de las tres personas");
mostrarLista();



//Segundo listado de las tres personas donde se ha introducido nueva direccion, nuevo mail y nuevo telefono, despues de realizar la busqueda por DNI (12345678A)
console.log("\n\nListado de las tres personas con las modificaciones realizadas");

let modificado:boolean = false;

for (let i=0; i < arrayPersonas.length; i++){
    if (arrayPersonas[i].dni === "12345678A"){
        arrayPersonas[i].direcciones=nuevaDireccion;
        arrayPersonas[i].mails=nuevoMail;
        arrayPersonas[i].telefonos=nuevoTelefono;
        modificado = true;
        break;
    }
}

if (modificado){
    console.log("Se han añadido una nueva direccion, nuevo mail y nuevo telefono");
} else {
    console.log("No se ha encontrado el DNI indicado");
}

mostrarLista();