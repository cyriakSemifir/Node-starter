export class Arme {

    private _degatMini: number = Math.floor(Math.random() * Math.floor(40) + 1)
    private _degatMax: number = Math.floor(Math.random() * Math.floor(100) + 1)
    private _chanceDeCrit: number = 0.5
    private _nom: string = "marteau"

    constructor() {
        this.creation
    }

    creation() {
        this._nom
        this._degatMini
        this._degatMax
    }

    setDegatMini(param: number) {
        this._degatMini = param
    }

    getDegatMini() {
        return this._degatMini
    }

    setDegatMax(param: number) {
        this._degatMax = param
    }

    getDegatMax() {
        return this._degatMax
    }

    setChanceDeCrit(param: number) {
        this._chanceDeCrit = param
    }

    getChanceDeCrit() {
        return this._chanceDeCrit
    }

    set Nom(param: string) {
        this._nom = param
    }

    get Nom() {
        return this._nom
    }


}