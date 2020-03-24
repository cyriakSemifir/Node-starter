import { Personnage } from "./personnage"

export class Mechant extends Personnage {


    constructor(_nom: string = "") {
        super(_nom);

        this.creation()
    }

    creation() {
        this.Nom = this.nomAlea()
        this.PvMax = 400
        this.Pv = 400
        this.Defense = 5
    }

    nomAlea(): string {
        let name = Math.random().toString(36).replace(/[^a-z]+/g, '')
        return name[0].toUpperCase() + name.substring(1)
    }
}