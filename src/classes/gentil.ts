enum role {
    dps,
    tank,
    classic,
    assassin
}

class Gentil extends Personnage {

    private enum: role

    constructor(nom: string) {
        super(nom)
    }

    creation() {

    }

    soigner() {

    }
}