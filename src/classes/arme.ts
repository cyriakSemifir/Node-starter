export class Arme {

    private _degatMini: number = Math.floor(Math.random() * Math.floor(40 - 1) + 1)
    private _degatMax: number = Math.floor(Math.random() * Math.floor(100 - 40) + 40)
    private _chanceDeCrit: number = 0.5
    private _nom: string = "marteau"

    constructor() {
    }

    creation() {
        this._nom
        this._degatMini
        this._degatMax
    }

    set DegatMini(param: number) {
        this._degatMini = param
    }

    get DegatMini() {
        return this._degatMini
    }

    set DegatMax(param: number) {
        this._degatMax = param
    }

    get DegatMax() {
        return this._degatMax
    }

    set ChanceDeCrit(param: number) {
        this._chanceDeCrit = param
    }

    get ChanceDeCrit() {
        return this._chanceDeCrit
    }

    set Nom(param: string) {
        this._nom = param
    }

    get Nom() {
        return this._nom
    }

}