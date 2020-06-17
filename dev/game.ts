class Game {
    
    private background!: HTMLElement
    private unicorn: Unicorn
    private unicorn2: Unicorn
    private frog: Frog
    public leftArrows!: Leftarrows
    public rightArrows!: Rightarrows
    private lifehearts: Lifeheart[] = []
    private lifehearts2: Lifeheart[] = []
    private winLeft: number = 0
    private WinRight: number = 0
    private _next: boolean= false
    public get next():boolean{return this._next}

    constructor(player1:string, player2: string) {
        this.createbackground()
        console.log(player1,player2)
        console.log("Game was created!")
        this.unicorn = new Unicorn(0, player1)
        this.unicorn2 = new Unicorn(2, player2)
        this.frog = new Frog()


        if ((this.lifehearts.length == 0) && (this.lifehearts2.length == 0)) {
            this.lifehearts.push(new Lifeheart(50))
            this.lifehearts.push(new Lifeheart(150))
            this.lifehearts.push(new Lifeheart(250))
            this.lifehearts2.push(new Lifeheart(1200))
            this.lifehearts2.push(new Lifeheart(1300))
            this.lifehearts2.push(new Lifeheart(1400))
            this.addArrows()
        }

        this.newGame()
        this.gameloop()



    }
    createbackground(){
        this.background = document.createElement("background")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.background)

        this.background.classList.add(`gamebg`)
    }

    public newGame() {
        console.log("game is gecreerd in new game")
        if ((this.lifehearts.length == 0) && (this.lifehearts2.length == 0)) {
            this.lifehearts.push(new Lifeheart(50))
            this.lifehearts.push(new Lifeheart(150))
            this.lifehearts.push(new Lifeheart(250))
            this.lifehearts2.push(new Lifeheart(1200))
            this.lifehearts2.push(new Lifeheart(1300))
            this.lifehearts2.push(new Lifeheart(1400))
            this.addArrows()
        }


        if (this.winLeft == 1) {
            // this.lifehearts2[this.lifehearts2.length].remove()
            for (let i = this.lifehearts2.length; i >= 0; i--) {
                // verwijder het object tijdens de loop
                this.lifehearts2.splice(i, 1)
                console.log("spliced")
                // stop de loop
                break;

            }

            this.winLeft = 0

            this.addArrows()
            console.log("leftArrows.win")
        }


        if (this.WinRight == 1) {
            // this.lifehearts[this.lifehearts.length].remove()
            this.WinRight = 0

            this.addArrows()

            console.log("rightArrows.win")
        }
    }

    public addArrows() {
        let first = Math.floor(Math.random() * 6)
        let second = Math.floor(Math.random() * 6)
        let third = Math.floor(Math.random() * 6)
        let fourth = Math.floor(Math.random() * 6)
        this.leftArrows = new Leftarrows(first, second, third, fourth)
        this.rightArrows = new Rightarrows(first, second, third, fourth)
    }

    public gameloop() {

        this.unicorn.update()
        this.unicorn2.update2()
        this.frog.updateFrog()


        for (const heart of this.lifehearts) {
            heart.lifeupdate()
        }

        for (const heart2 of this.lifehearts2) {
            heart2.lifeupdate()
        }


        if ((this.leftArrows._win == 1) || (this.rightArrows._win == 1)) {
            console.log("winLeft")
            if (this.leftArrows._win == 1) {
                this.winLeft = 1
                this.leftArrows._win = 0
                this.unicorn._win = 1

                this.rightArrows.delete()
                this.leftArrows.delete()

                setTimeout(() => {
                    this.newGame()
                }, 6000);




            }
            if (this.rightArrows._win == 1) {
                this.rightArrows._win = 0
                this.unicorn2._win = 1
                this.WinRight = 1
                console.log("winRight")
                this.leftArrows.delete()

                setTimeout(() => {
                    this.newGame()
                }, 4500);

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