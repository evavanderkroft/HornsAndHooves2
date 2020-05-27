class Game {
    private unicorn: Unicorn
    private unicorn2: Unicorn2
    private frog: Frog

    constructor() {
        console.log("Game was created!")
        this.unicorn = new Unicorn()
        this.unicorn2 = new Unicorn2()
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