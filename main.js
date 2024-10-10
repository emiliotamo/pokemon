


const Move = require("./move");
const type = require("./type");
const Pokemon = require("./pokemon");
let readlineSync = require("readline-sync");
let ataquerapido = new Move("ataque rápido", 60);
let rayo = new Move("rayo", 80)
let lanzallamas = new Move("lanzallamas", 67)
let garradragon = new Move("guerradragon", 70)
let hidrobomba = new Move("hidrobomba", 67)
let rayohielo = new Move("rayohielo", 77)
let somnifero = new Move("somnifero", 40)
let terremoto = new Move("terremoto", 45)
let trueno = new Move("Trueno", 110);
let pinmisil = new Move("Pin Misil", 25);
let bolasombra = new Move("Bola Sombra", 80);
let bombalodo = new Move("Bomba Lodo", 65);
let golpeCuerpo = new Move("Golpe Cuerpo", 85);
let hiperrayo = new Move("Hiperrayo", 150);
let cascada = new Move("Cascada", 80);
let mordisco = new Move("Mordisco", 60);
let alientodragon = new Move("Aliento Dragón", 60);
let punotruno = new Move("Puño Trueno", 75);
let golpecruzado = new Move("Golpe Cruzado", 100);
let punodinamico = new Move("Puño Dinámico", 100);

let pokemon1 = new Pokemon("Pikachu", "Eléctrico", 165, 154,60,40, [ataquerapido, rayo]);
let pokemon2 = new Pokemon("Charizard", "Fuego", 231, 231, 65,54, [lanzallamas, garradragon]);
let pokemon3 = new Pokemon("Blastoise", "Agua", 189, 189, 81,50, [hidrobomba, rayohielo]);
let pokemon4 = new Pokemon("Venusaur", "Planta", 180, 180, 83,60, [somnifero, terremoto]);
let pokemon5 = new Pokemon("Jolteon", "Eléctrico", 165, 165, 60, 70, [trueno, pinmisil]);
let pokemon6 = new Pokemon("Gengar", "Fantasma", 160, 160, 60, 90, [bolasombra, bombalodo]);
let pokemon7 = new Pokemon("Snorlax", "Normal", 160, 160, 69, 92, [golpeCuerpo, hiperrayo]);
let pokemon8 = new Pokemon("Gyarados", "Agua", 195, 195, 99,77, [cascada, mordisco]);
let pokemon9 = new Pokemon("Dragonite", "Dragón", 191, 191, 95, 90, [alientodragon, punotruno]);
let pokemon10 = new Pokemon("Machamp", "Lucha", 190, 190, 80,65, [golpecruzado, punodinamico]);


let pk = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, pokemon7, pokemon8, pokemon9, pokemon10]

let random = Math.floor(Math.random() * pk.length);

let pokemonfinal = pk[random];
console.log(pokemonfinal);

let random2 = Math.floor(Math.random() * pk.length);
let pokemonfinal2 = pk[random2];
console.log(pokemonfinal2);



// Mostrar información del Jugador y del Rival
console.log("Información del Jugador:");
console.log(`Nombre: ${pokemonfinal.nombre}`);
console.log(`Vida: ${pokemonfinal.hpActual}/${pokemonfinal.hpMax}`);
console.log("----------------------------");
console.log("Información del Rival:");
console.log(`Nombre: ${pokemonfinal2.nombre}`);
console.log(`Vida: ${pokemonfinal2.hpActual}/${pokemonfinal2.hpMax}`);

while (pokemonfinal.hpActual > 0 && pokemonfinal2.hpActual > 0) {
    console.log("----------------------------");
    let elegir = readlineSync.question("¿Qué quieres hacer?\nA) Atacar\nB) Curarse\nSelecciona A o B: ");

    switch (elegir.toUpperCase()) {
        case 'A': {
            console.log("\nElige un ataque:");
            pokemonfinal.movimientos.forEach((mov, index) => {
                console.log(`${index + 1}. ${mov.nombre} (Daño: ${mov.dañoBase})`);
            });
            let elegirAtaque = readlineSync.question("elige un ataque: ");
            let movimientoJugador = pokemonfinal.movimientos[elegirAtaque - 1];
            pokemonfinal.atacar(pokemonfinal, pokemonfinal2, movimientoJugador);
            break;
        }

        case 'B': {
            pokemonfinal.curarse();
            break;
        }

        default:
            console.log("Acción no válida, pierdes el turno.");
            break;
    }

    if (pokemonfinal2.hpActual <= 0) {
        console.log("El jugador ganó");
        break;
    }

    // Turno de la máquina (pokemonfinal2)
    let elegirAccionMaquina = Math.floor(Math.random() * 2) + 1;
    switch (elegirAccionMaquina) {
        case 1: {
            let movimientoRival = pokemonfinal2.movimientos[Math.floor(Math.random() * pokemonfinal2.movimientos.length)];
            pokemonfinal2.atacar(pokemonfinal2, pokemonfinal, movimientoRival);
            break;
        }

        case 2: {
            pokemonfinal2.curarse();
            break;
        }

        default:
            console.log("Acción no válida, el rival pierde el turno.");
            break;
    }

    if (pokemonfinal.hpActual <= 0) {
        console.log("El rival ganó");
        break;
    }

    console.log("Información del Jugador:");
    console.log(`Nombre: ${pokemonfinal.nombre}`);
    console.log(`Vida: ${pokemonfinal.hpActual.toFixed(0)}/${pokemonfinal.hpMax.toFixed(0)}`);

    console.log("----------------------------");
    
    console.log("Información del Rival:");
    console.log(`Nombre: ${pokemonfinal2.nombre}`);
    console.log(`Vida: ${pokemonfinal2.hpActual.toFixed(0)}/${pokemonfinal2.hpMax.toFixed(0)}`);
}

console.log("----------------------------");
console.log("----------------------------");
console.log("El combate ha terminado.");








