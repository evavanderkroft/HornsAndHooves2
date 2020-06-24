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
    private specialdone1: number = 0
    private specialdone2: number = 0
    private bezig: number = 0


    private _next: boolean = false
    public get next(): boolean { return this._next }
    private _player1: string = ""
    public get player1(): string { return this._player1 }
    private _player2: string = ""
    public get player2(): string { return this._player2 }
    private _winner: string = ""
    public get winner(): string { return this._winner }

    constructor(player1: string, player2: string, background: string) {
        window.addEventListener("keyup", (e: KeyboardEvent) => this.specialAttack(e))
        this._player1 = player1
        this._player2 = player2
        this.createbackground(background)
        console.log(player1, player2)
        console.log("Game was created!")
        this.unicorn = new Unicorn(0, player1)
        this.unicorn2 = new Unicorn(2, player2)
        this.frog = new Frog()
        this.specialdone1 = 0
        this.specialdone2 = 0
        this.bezig = 0

        this.newGame()
        this.gameloop()



    }
    createbackground(background: string) {
        this.background = document.createElement("background")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.background)

        this.background.style.backgroundImage = `url(../docs/img/${background}.jpg)`
    }

    public newGame() {
        console.log("game is gecreerd in new game")
        if ((this.lifehearts.length == 0) && (this.lifehearts2.length == 0)) {
            this.lifehearts.push(new Lifeheart(-50))
            this.lifehearts.push(new Lifeheart(50))
            this.lifehearts.push(new Lifeheart(150))
            this.lifehearts.push(new Lifeheart(250))
            this.lifehearts.push(new Lifeheart(350))


            this.lifehearts2.push(new Lifeheart(1100))
            this.lifehearts2.push(new Lifeheart(1200))
            this.lifehearts2.push(new Lifeheart(1300))
            this.lifehearts2.push(new Lifeheart(1400))
            this.lifehearts2.push(new Lifeheart(1500))

            this.addArrows()
        }



        if (this.winLeft == 1) {
            let lifeHeart: Lifeheart = this.lifehearts2.shift()!
            lifeHeart.delete()

            this.winLeft = 0

            this.addArrows()
            console.log("leftArrows.win")
        }

        if (this.WinRight == 1) {
            // this.lifehearts[this.lifehearts.length].remove()
            let lifeHeart2: Lifeheart = this.lifehearts.pop()!
            lifeHeart2.delete()

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
    public specialAttack(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case 67:
                if (this.specialdone1 == 1) {
                    console.log("special attack is al gebruikt")
                } else if (this.bezig == 1) {
                    console.log("1 special attack tegelijk mogelijk")
                } else {
                    this.bezig = 1
                    let soundspecial = new Audio('audio/specialattack.mp3')
                    soundspecial.play()
                    this.unicorn.specialattackplayer1()
                    this.rightArrows.delete()
                    this.leftArrows.delete()
                    setTimeout(() => {
                        this.addArrows()
                        window.removeEventListener("keydown", (e: KeyboardEvent) => this.specialAttack(e), true)
                        if (this.lifehearts2.length <= 2) {
                            this._next = true
                            this._winner = this._player1
                            console.log(this.winner)
                        } else {
                            let lifeheart: Lifeheart = this.lifehearts2.shift()!
                            lifeheart.delete()
                            let lifeheart2: Lifeheart = this.lifehearts2.shift()!
                            lifeheart2.delete()
                        }
                        this.specialdone1 = 1
                        this.bezig = 0
                    }, 3000);
                }
                break;
            case 78:
                if (this.specialdone2 == 1) {
                    console.log("special attack is al gebruikt")
                } else if (this.bezig == 1) {
                    console.log("1 special attack tegelijk mogelijk")
                } else {
                    this.bezig = 1
                    let soundspecial2 = new Audio('audio/specialattack.mp3')
                    soundspecial2.play()
                    this.unicorn2.specialattackplayer2()
                    this.rightArrows.delete()
                    this.leftArrows.delete()
                    setTimeout(() => {
                        this.addArrows()
                        if (this.lifehearts.length <= 2) {
                            this._next = true
                            this._winner = this._player2
                            console.log(this.winner)
                        } else {
                            let lifeHeart: Lifeheart = this.lifehearts.pop()!
                            lifeHeart.delete()
                            let lifeHeart2: Lifeheart = this.lifehearts.pop()!
                            lifeHeart2.delete()
                        }
                        this.specialdone2 = 1
                        this.bezig = 0
                    }, 3000);
                }

        }
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

        if (this.lifehearts.length == 0) {
            this._next = true
            this._winner = this._player2
            console.log(this.winner)
        }
        if (this.lifehearts2.length == 0) {
            this._next = true
            this._winner = this._player1
            console.log(this.winner)
        }


        if ((this.leftArrows._win == 1) || (this.rightArrows._win == 1)) {
            console.log("winLeft")

            if (this.leftArrows._win == 1 && this.bezig == 0) {
                this.bezig = 1
                this.winLeft = 1
                this.leftArrows._win = 0
                this.unicorn._win = 1

                this.rightArrows.delete()
                this.leftArrows.delete()

                setTimeout(() => {
                    this.newGame()
                    this.bezig = 0
                }, 6000);




            }
            if (this.rightArrows._win == 1 && this.bezig == 0) {
                this.bezig = 1
                this.rightArrows._win = 0
                this.unicorn2._win = 1
                this.WinRight = 1
                console.log("winRight")
                this.leftArrows.delete()

                setTimeout(() => {
                    this.newGame()
                    this.bezig = 0
                }, 4500);

            }

        }



        requestAnimationFrame(() => this.gameloop())


    }
}

