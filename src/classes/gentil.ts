import { Personnage } from "./personnage"

enum role {
    dps,
    tank,
    classic,
    assassin
}

export class Gentil extends Personnage {

    //private enum: role

    constructor(nom: string, arme: number) {
        super(nom, arme)

        this.creation();
    }

    creation() {
        this.PvMax = 200
        this.Pv = this.PvMax
        this.Defense = 10
    }

    soigner() {

    }
}