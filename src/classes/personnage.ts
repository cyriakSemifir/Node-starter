class Personnage {
    private nom: string
    private pv: number
    private pvMax: number
    private defense: number
    private arme: Arme

    constructor(nom: string) {

    }

    setNom(param: string) {
        this.nom = param
    }
    getNom() {
        return this.nom
    }

    setPv(param: number) {
        this.pv = param
    }
    getPv() {
        return this.pv
    }

    setPvMax(param: number) {
        this.pvMax = param
    }
    getPvMax() {
        return this.pvMax
    }

    setDefense(param: number) {
        this.defense = param
    }
    getDefense() {
        return this.defense
    }

    attaquer(cible) {

    }

    cibler() {

    }


}