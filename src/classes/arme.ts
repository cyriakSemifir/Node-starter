class Arme {

    private degatMini: number
    private degatMax: number
    private chanceDeCrit: number

    constructor() {

    }

    setDegatMini(param: number) {
        this.degatMini = param
    }

    getDegatMini() {
        return this.degatMini
    }

    setDegatMax(param: number) {
        this.degatMax = param
    }

    getDegatMax() {
        return this.degatMax
    }

    setChanceDeCrit(param: number) {
        this.chanceDeCrit = param
    }

    getChanceDeCrit() {
        return this.chanceDeCrit
    }


}