"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(Nombre, Apellidos, Edad, DNI, Cumpleanos, ColorFavorito, Sexo, Direcciones, Mails, Telefonos, Notas) {
        this._Nombre = Nombre;
        this._Apellidos = Apellidos;
        this._Edad = Edad;
        this._DNI = DNI;
        this._Cumpleanos = Cumpleanos;
        this._ColorFavorito = ColorFavorito;
        this._Sexo = Sexo;
        this._Direcciones = Direcciones;
        this._Mails = Mails;
        this._Telefonos = Telefonos;
        this._Notas = Notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._Nombre;
        },
        set: function (value) {
            this._Nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._Apellidos;
        },
        set: function (value) {
            this._Apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._Edad;
        },
        set: function (value) {
            this._Edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._DNI;
        },
        set: function (value) {
            this._DNI = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumpleanos", {
        get: function () {
            return this._Cumpleanos;
        },
        set: function (value) {
            this._Cumpleanos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorfavorito", {
        get: function () {
            return this._ColorFavorito;
        },
        set: function (value) {
            this._ColorFavorito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._Sexo;
        },
        set: function (value) {
            this._Sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._Direcciones;
        },
        set: function (value) {
            this._Direcciones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._Mails;
        },
        set: function (value) {
            this._Mails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this._Telefonos;
        },
        set: function (value) {
            this._Telefonos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._Notas;
        },
        set: function (value) {
            this._Notas = value;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.mostrarPersona = function () {
        console.log("\nNombre: " + this._Nombre, "\nApellidos: " + this._Apellidos, "\nEdad: " + this._Edad, "\nDNI: " + this._DNI, "\nCumpleaños: " + this._Cumpleanos, "\nColor favorito: " + this._ColorFavorito, "\nSexo: " + this._Sexo, "\n\nDirecciones:\n");
        this._Direcciones.mostrarDirecciones();
        console.log("Mails:\n");
        this._Mails.mostrarMails();
        console.log("Telefonos:\n");
        this._Telefonos.mostrarTelefonos();
        console.log("Notas: " + this._Notas + "\n\n");
    };
    //Funcion Comprobar DNI
    Persona.prototype.comprobarDni = function (dni) {
        return dni === this._DNI;
    };
    return Persona;
}());
exports.Persona = Persona;
