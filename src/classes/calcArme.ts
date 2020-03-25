import { Arme } from "./arme";

export class CalcArme extends Arme {

    constructor(numero: number) {
        super()
        this.choixArme(numero)
        this.creation

    }

    Arme1() {
        this.ChanceDeCrit += 0.2;
    }

    Arme2() {
        this.DegatMax += 50;
    }

    Arme3() {
        this.ChanceDeCrit -= 0.2;
    }

    choixArme(numero: number) {

        console.log("valeur de numero : " + numero)
        if (numero == 1) {
            this.Arme1();
        }
        else if (numero == 2) {
            this.Arme2()
        }
        else {
            this.Arme3()
        }
    }
}