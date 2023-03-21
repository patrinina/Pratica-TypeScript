"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
var direccionD01 = new direccion_1.Direccion("Golondrina", 7, 4, "A", "11659", "Puerto Serrano", "Cadiz");
var direccionD02 = new direccion_1.Direccion("Duero", 15, 4, "B", "41010", "Sevilla", "Sevilla");
var direccionD03 = new direccion_1.Direccion("Guadalete", 25, 1, "A", "28017", "Madrid", "Madrid");
var nuevaDireccion = new direccion_1.Direccion("Violeta", 7, 7, "A", "28027", "Madrid", "Madrid");
var mailM01 = new mail_1.Mail("Personal", "pnieto@gmail.com");
var mailM02 = new mail_1.Mail("Trabajo", "jnortega@fontaneriadeconfianza.es");
var mailM03 = new mail_1.Mail("Personal", "juan.carrero@gmail.com");
var nuevoMail = new mail_1.Mail("personal", "ptosevilla@gmail.com");
var telefonoT01 = new telefono_1.Telefono("Movil", 658236987);
var telefonoT02 = new telefono_1.Telefono("Fijo", 915896325);
var telefonoT03 = new telefono_1.Telefono("Movil", 789456123);
var nuevoTelefono = new telefono_1.Telefono("Movil", 652741852);
var persona1 = new persona_1.Persona("Patricia", "Nieto Naranjo", 30, "12345678A", "20 de junio", "verde", "Femenino", direccionD01, mailM01, telefonoT01, "Compañera de colegio");
var persona2 = new persona_1.Persona("Jose", "Narvaez Ortega", 52, "87654321B", "5 de marzo", "Negro", "Masculino", direccionD02, mailM02, telefonoT02, "Fontanero");
var persona3 = new persona_1.Persona("Juan", "Carrero Barrera", 15, "74185296C", "21 de septiembre", "Blanco", "Masculino", direccionD03, mailM03, telefonoT03, "Hijo vecina");
var arrayPersonas = [persona1, persona2, persona3];
function mostrarLista() {
    for (var i = 0; i < arrayPersonas.length; i++) {
        arrayPersonas[i].mostrarPersona();
    }
}
// Primer listado de las tres personas
console.log("\n\nListado de las tres personas");
mostrarLista();
//Segundo listado de las tres personas donde se ha introducido nueva direccion, nuevo mail y nuevo telefono, despues de realizar la busqueda por DNI (12345678A)
console.log("\n\nListado de las tres personas con las modificaciones realizadas");
var modificado = false;
for (var i = 0; i < arrayPersonas.length; i++) {
    if (arrayPersonas[i].dni === "12345678A") {
        arrayPersonas[i].direcciones = nuevaDireccion;
        arrayPersonas[i].mails = nuevoMail;
        arrayPersonas[i].telefonos = nuevoTelefono;
        modificado = true;
        break;
    }
}
if (modificado) {
    console.log("Se han añadido una nueva direccion, nuevo mail y nuevo telefono");
}
else {
    console.log("No se ha encontrado el DNI indicado");
}
mostrarLista();
