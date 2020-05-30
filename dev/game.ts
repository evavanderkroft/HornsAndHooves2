class Game {
    private unicorn: Unicorn
    private unicorn2: Unicorn
    private frog: Frog

    constructor() {
        console.log("Game was created!")
        this.unicorn = new Unicorn(0,68,65)
        this.unicorn2 = new Unicorn(2,37,39)
        new Leftarrows ()
        new Rightarrows ()
        this.frog = new Frog()
        this.gameloop()
    }
    private gameloop() {
        this.unicorn.update()
        this.unicorn2.update2()
        this.frog.updateFrog()
        requestAnimationFrame(() => this.gameloop())
    }
}

window.addEventListener("load", () => new Game())