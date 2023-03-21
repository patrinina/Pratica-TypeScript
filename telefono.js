"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(Tipo, Numero) {
        this._Tipo = Tipo;
        this._Numero = Numero;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        get: function () {
            return this._Tipo;
        },
        set: function (value) {
            this._Tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this._Numero;
        },
        set: function (value) {
            this._Numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Telefono.prototype.mostrarTelefonos = function () {
        console.log("Tipo: " + this._Tipo, "\nNúmero: " + this._Numero + "\n");
    };
    return Telefono;
}());
exports.Telefono = Telefono;
