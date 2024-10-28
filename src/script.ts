// Ejercicio D1S1.1.1
const mensaje: string = "Hola TypeScript.";
document.getElementById("output1")!.innerText = mensaje;

// Ejercicio D1S1.1.2
interface Animatronico {
    nombre: string;
    edad: number;
    pesadilla: string;
}

const freddy: Animatronico = {
    nombre: "Freddy Fazbear",
    edad: 15,
    pesadilla: "Animatronico de terror"
};

document.getElementById("output2")!.innerText = `Nombre: ${freddy.nombre}, Edad: ${freddy.edad}, Pesadilla: ${freddy.pesadilla}`;

// Ejercicio D1S2.1.1
function atacar(arma: string): void {
    document.getElementById("output3")!.innerText = `Freddy ataca con ${arma}.`;
}

atacar("microfono");

// Ejercicio D1S2.1.2
function saltar(metros?: number): void {
    const mensaje = metros !== undefined ? `Freddy salta ${metros} metros.` : "Freddy no salto";
    document.getElementById("output4")!.innerText = mensaje;
}

saltar(3); 

// Ejercicio D1S2.2.1
class Pesadilla {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return `¡${this.nombre.toUpperCase()} Esta aqui!`;
    }
}

const pesadilla1 = new Pesadilla("Freddy");
document.getElementById("output5")!.innerText = pesadilla1.gritar();

// Ejercicio D1S2.2.2
class PesadillaConArrow {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar = (): string => {
        return `¡${this.nombre.toUpperCase()} esta aqui!`;
    }
}

const pesadilla2 = new PesadillaConArrow("Freddy");
document.getElementById("output6")!.innerText = pesadilla2.gritar();
