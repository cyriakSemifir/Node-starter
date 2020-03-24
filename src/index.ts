import { Gentil } from "./classes/gentil";
import { Mechant } from "./classes/mechant";
import { Arme } from "./classes/arme";

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arme = new Arme();

rl.question('quel est le nom de votre héro ? ', (nom: string) => {
    let hero = new Gentil(nom)
    console.log(hero);

    let mechant = new Mechant()
    console.log(mechant);
});

