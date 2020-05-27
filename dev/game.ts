class Game {
    private unicorn: Unicorn
    private unicorn2: Unicorn2
    private leftarrow!: Leftarrow
    private rightarrow!: Rightarrow
    private frog: Frog

    constructor() {
        console.log("Game was created!")
        this.unicorn = new Unicorn()
        this.unicorn2 = new Unicorn2()
        this.leftarrow = new Leftarrow ()
        this.rightarrow = new Rightarrow ()
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