import { Gentil } from "./gentil";
import { Mechant } from "./mechant";


export class Combat {

    private _gentil: Gentil
    private _mechant: Mechant

    constructor(gentil: Gentil, mechant: Mechant) {
        this._gentil = gentil
        this._mechant = mechant
    }

    Engagement() {

        let rand = Math.random();

        if (rand >= 0.5) {

            return 0
        } else {

            return 1
        }
    }

    Frapper() {

        if (this.Engagement() == 0) {

            if (this._gentil.Pv > 0) {
                this.GentilAttaque();

            }
            if (this._mechant.Pv > 0) {
                this.MechantAttaque();
            }

        } else {

            if (this._mechant.Pv > 0) {
                this.MechantAttaque();
            }

            if (this._gentil.Pv > 0) {
                this.GentilAttaque();

            }
        }
    }

    GentilAttaque() {

        console.log(this._gentil.Nom + " attaque");
        let randFrappe = Math.floor(Math.random() * Math.floor(this._gentil.Arme.DegatMax - this._gentil.Arme.DegatMini) + this._gentil.Arme.DegatMini)

        this._mechant.Pv -= (randFrappe - this._mechant.Defense)

        if (this._mechant.Pv <= 0) {
            this._mechant.Pv = 0
            console.log(this._gentil.Nom + ' a gagné')
        }

        console.log(this._gentil.Nom + " attaque de " + randFrappe)
        console.log("les pv du mechant sont maintenant de " + this._mechant.Pv)
    }

    MechantAttaque() {

        console.log("le méchant attaque");
        let randFrappe = Math.floor(Math.random() * Math.floor(this._mechant.Arme.DegatMax - this._mechant.Arme.DegatMini) + this._mechant.Arme.DegatMini)

        this._gentil.Pv -= (randFrappe - this._gentil.Defense)

        if (this._gentil.Pv <= 0) {
            this._gentil.Pv = 0
            console.log("le mechant a gagné")
        }

        console.log("le mechant attaque de " + randFrappe)
        console.log("les pv de " + this._gentil.Nom + " sont maintenant de " + this._gentil.Pv)

    }



}