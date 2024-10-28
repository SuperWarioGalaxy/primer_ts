"use strict";
// Ejercicio D1S1.1.1
var mensaje = "Hola TypeScript.";
document.getElementById("output1").innerText = mensaje;
var freddy = {
    nombre: "Freddy Fazbear",
    edad: 15,
    pesadilla: "Animatronico de terror"
};
document.getElementById("output2").innerText = "Nombre: ".concat(freddy.nombre, ", Edad: ").concat(freddy.edad, ", Pesadilla: ").concat(freddy.pesadilla);
// Ejercicio D1S2.1.1
function atacar(arma) {
    document.getElementById("output3").innerText = "Freddy ataca con ".concat(arma, ".");
}
atacar("microfono");
// Ejercicio D1S2.1.2
function saltar(metros) {
    var mensaje = metros !== undefined ? "Freddy salta ".concat(metros, " metros.") : "Freddy no salto";
    document.getElementById("output4").innerText = mensaje;
}
saltar(3);
// Ejercicio D1S2.2.1
var Pesadilla = /** @class */ (function () {
    function Pesadilla(nombre) {
        this.nombre = nombre;
    }
    Pesadilla.prototype.gritar = function () {
        return "\u00A1".concat(this.nombre.toUpperCase(), " Esta aqui!");
    };
    return Pesadilla;
}());
var pesadilla1 = new Pesadilla("Freddy");
document.getElementById("output5").innerText = pesadilla1.gritar();
// Ejercicio D1S2.2.2
var PesadillaConArrow = /** @class */ (function () {
    function PesadillaConArrow(nombre) {
        var _this = this;
        this.gritar = function () {
            return "\u00A1".concat(_this.nombre.toUpperCase(), " esta aqui!");
        };
        this.nombre = nombre;
    }
    return PesadillaConArrow;
}());
var pesadilla2 = new PesadillaConArrow("Freddy");
document.getElementById("output6").innerText = pesadilla2.gritar();
