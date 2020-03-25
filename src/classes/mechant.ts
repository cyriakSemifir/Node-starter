import { Personnage } from "./personnage"

export class Mechant extends Personnage {


    constructor(_nom: string = "", arme: number = 3) {
        super(_nom, arme);

        this.creation()
    }

    creation() {
        this.Nom = this.nomAlea()
        this.PvMax = 500
        this.Pv = this.PvMax
        this.Defense = 5
    }

    nomAlea(): string {
        let name = Math.random().toString(36).replace(/[^a-z]+/g, '')
        return name[0].toUpperCase() + name.substring(1)
    }
}