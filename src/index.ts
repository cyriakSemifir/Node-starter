import { Gentil } from "./classes/gentil";
import { Mechant } from "./classes/mechant";
import { Combat } from "./classes/combat";

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const r2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

rl.question('quel est le nom de votre héro ? ', (nom: string) => {
    rl.question('choisissez votre arme entre 1 et 2', (arme: number) => {

        let hero = new Gentil(nom, arme)
        console.log(hero);

        let mechant = new Mechant()
        console.log(mechant);

        let combat = new Combat(hero, mechant)

        while (hero.Pv != 0 && mechant.Pv != 0) {
            combat.Engagement();
            combat.Frapper();
        }
        rl.close();
    });

});
