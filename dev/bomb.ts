class Explosion {
    private explosion: HTMLElement


    constructor() {
        this.explosion = document.createElement("bomb")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.explosion)
    }

    public flipped() {
        this.explosion.style.transform = `scaleX(-1)`
        this.explosion.style.left = `15%`
    }

    public flippedBack() {
        this.explosion.style.transform = `scaleX(1)`
        this.explosion.style.left = `60%`
    }

    public explode() {
        this.explosion.style.display = "block"
    }

    public stopExplode() {
        this.explosion.style.display = "none"
    }
}