"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(Calle, Numero, Piso, Letra, CodigoPostal, Poblacion, Provincia) {
        this._Calle = Calle;
        this._Numero = Numero;
        this._Piso = Piso;
        this._Letra = Letra;
        this._CodigoPostal = CodigoPostal;
        this._Poblacion = Poblacion;
        this._Provincia = Provincia;
    }
    Object.defineProperty(Direccion.prototype, "calle", {
        get: function () {
            return this._Calle;
        },
        set: function (value) {
            this._Calle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "numero", {
        get: function () {
            return this._Numero;
        },
        set: function (value) {
            this._Numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "piso", {
        get: function () {
            return this._Piso;
        },
        set: function (value) {
            this._Piso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        get: function () {
            return this._Letra;
        },
        set: function (value) {
            this._Letra = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "codigopostal", {
        get: function () {
            return this._CodigoPostal;
        },
        set: function (value) {
            this._CodigoPostal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        get: function () {
            return this._Poblacion;
        },
        set: function (value) {
            this._Poblacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        get: function () {
            return this._Provincia;
        },
        set: function (value) {
            this._Provincia = value;
        },
        enumerable: false,
        configurable: true
    });
    Direccion.prototype.mostrarDirecciones = function () {
        console.log("Calle: " + this._Calle, "\nNúmero: " + this._Numero, "\nPiso: " + this._Piso, "\nLetra: " + this._Letra, "\nCódigo Postal: " + this._CodigoPostal, "\nPoblación: " + this._Poblacion, "\nProvincia: " + this._Provincia + "\n");
    };
    return Direccion;
}());
exports.Direccion = Direccion;
