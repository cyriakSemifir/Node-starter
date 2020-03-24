import { Arme } from "./arme"

export class Personnage {

    private _nom: string
    private _pv: number = 0
    private _pvMax: number = 0
    private _defense: number = 0
    private _arme: Arme

    constructor(nom: string) {
        this._nom = nom
        this._arme = new Arme()
    }

    set Nom(param: string) {
        this._nom = param
    }

    get Nom() {
        return this._nom
    }

    set Pv(param: number) {
        this._pv = param
    }
    get Pv() {
        return this._pv
    }

    set PvMax(param: number) {
        this._pvMax = param
    }

    get PvMax() {
        return this._pvMax
    }

    set Defense(param: number) {
        this._defense = param
    }

    get Defense() {
        return this._defense
    }

    set Arme(param: Arme) {
        this._arme = param
    }

    get Arme() {
        return this._arme
    }

    // attaquer(cible) {

    // }

    cibler() {

    }

}