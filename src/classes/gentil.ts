import { Personnage } from "./personnage"

enum role {
    dps,
    tank,
    classic,
    assassin
}

export class Gentil extends Personnage {

    //private enum: role

    constructor(nom: string) {
        super(nom)

        this.creation(nom);
    }

    creation(nom: string) {
        this.Nom = nom
        this.Pv = 200
        this.PvMax = 200
        this.Defense = 10
    }

    soigner() {

    }
}