"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(Tipo, Direccion) {
        this._Tipo = Tipo;
        this._Direccion = Direccion;
    }
    Object.defineProperty(Mail.prototype, "tipo", {
        get: function () {
            return this._Tipo;
        },
        set: function (value) {
            this._Tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "direccion", {
        get: function () {
            return this._Direccion;
        },
        set: function (value) {
            this._Direccion = value;
        },
        enumerable: false,
        configurable: true
    });
    Mail.prototype.mostrarMails = function () {
        console.log("Tipo: " + this._Tipo, "\nDirección e-mail: " + this._Direccion + "\n");
    };
    return Mail;
}());
exports.Mail = Mail;
