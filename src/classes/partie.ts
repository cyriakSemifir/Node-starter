class Partie {

    private tableGentil = []
    private tableMechant = []

    constructor() { }

    getTableGentil() {
        return this.tableGentil
    }

    getTableMechant() {
        return this.tableMechant
    }

    ajouter(param) {
        this.tableGentil.push(param)
    }

    creationMechant() {

    }
}