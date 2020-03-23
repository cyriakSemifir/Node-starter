class CalcArme extends Arme {

    constructor() {
        super()
    }

    Arme1() {
        this.setChanceDeCrit = (this.getChanceDeCrit + 10);
    }

    Arme2() {
        this.setDegatMax = this.getDegatMax + 10;
    }
}