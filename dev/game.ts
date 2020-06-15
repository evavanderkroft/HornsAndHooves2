class Game {

    private unicorn: Unicorn
    private unicorn2: Unicorn
    private frog: Frog
    public leftArrows: Leftarrows
    public rightArrows: Rightarrows
    private lifehearts : Lifeheart[] = []
    private lifehearts2 : Lifeheart[] = []

    constructor() {
        console.log("Game was created!")
        let first = Math.floor(Math.random() * 6)
        let second = Math.floor(Math.random() * 6)
        let third = Math.floor(Math.random() * 6)
        let fourth = Math.floor(Math.random() * 6)
        this.leftArrows = new Leftarrows(first, second, third, fourth)
        this.rightArrows = new Rightarrows(first, second, third, fourth)
        this.unicorn = new Unicorn(0, 68, 65)
        this.unicorn2 = new Unicorn(2, 37, 39)
        this.frog = new Frog()
        this.lifehearts.push(new Lifeheart(0))

        this.gameloop()

    }


    public gameloop() {
        this.unicorn.update()
        this.unicorn2.update2()
        this.frog.updateFrog()

        for (const heart of this.lifehearts) {
            heart.lifeupdate()}


        if ((this.leftArrows._win == 1) || (this.rightArrows._win == 1)) {
            if (this.leftArrows._win == 1) {
                this.leftArrows._win = 0
                this.unicorn._win = 1
                console.log("winLeft")
                this.rightArrows.delete()


            }
            if (this.rightArrows._win == 1) {
                this.rightArrows._win = 0
                this.unicorn2._win = 1
                console.log("winRight")
                this.leftArrows.delete()
            }

        }

        requestAnimationFrame(() => this.gameloop())


    }

    // private removePoint(player: number) {
    //     if (player == 1) {
    //         let score = document.getElementsByTagName("score")[0]
    //         this.score--
    //         score.innerHTML = "Score: " + this.score
    //     } else {
    //         let score = document.getElementsByTagName("score")[1]
    //         this.score2--
    //         score.innerHTML = "Score: " + this.score2
    //     }
    // }

}

window.addEventListener("load", () => new Game())