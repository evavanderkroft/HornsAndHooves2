class Game {

    private unicorn: Unicorn
    private unicorn2: Unicorn
    private frog: Frog

    constructor() {
        console.log("Game was created!")
        
        let first =  Math.floor(Math.random() * 6)
        let second = Math.floor(Math.random() * 6)
        let third = Math.floor(Math.random() * 6)
        let fourth = Math.floor(Math.random() * 6)
        new Leftarrows(first, second, third, fourth)
        new Rightarrows(first, second, third, fourth)

        this.unicorn = new Unicorn(0,68,65)
        this.unicorn2 = new Unicorn(2,37,39)
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