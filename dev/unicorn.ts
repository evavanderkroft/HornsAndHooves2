class Unicorn {
    private unicorn: HTMLElement
    private x: number = 0
    private y: number

    rightSpeed: number = 10
    leftSpeed: number = 10

    public attackBack: boolean = false;
    explosion: Explosion = new Explosion

    private win: number = 0

    public get _win(): number { return this.win }
    public set _win(A: number) { this.win = A }

    private win2: number = 0
    public get _win2(): number { return this.win2 }
    public set _win2(A: number) { this.win2 = A }
    private _colour: string =""
    public get colour():string{return this._colour}

    constructor(x: number, colour:string) {
        this._colour = colour
        this.unicorn = document.createElement(`unicorn${colour}`)
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.unicorn)

        if (x != 0) { x = window.innerWidth - this.unicorn.clientWidth }
        this.x = x
        this.y = 500
    }

    public moveUnicorns() {
        // && (this.win == 1)
    }

    public update() {
        this.attackMove()
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px)`

    }
    public update2() {
        this.attackMove2()

        // private Bounceright() {
        // this.toRight = false;
        // }

        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(-1)`
    }
    // public stop`${this.colour}run`ning() {
    //     this.unicorn.classList.remove(`${this.colour}run`)
    // }
    public getRectangle() {
        return this.unicorn.getBoundingClientRect()
    }
    public bounceX() {
        this.rightSpeed = -1
        this.unicorn.classList.remove(`${this.colour}run`)
        setTimeout(() => {
            this.rightSpeed = 0
        }, 300);
    }



    attackMove() {
        if ((this.x <= 403) && (this.win == 1)) {
            console.log("hij doet het update 1")
            this.unicorn.classList.add(`${this.colour}run`)
            this.x += 4
        }

        if ((this.x > 400) && (this.attackBack == false)) {
            console.log("hij werkt nu wel")
            this.unicorn.classList.remove(`${this.colour}run`)
            this.win = 0

            this.explosion.flippedBack()
            this.attackAnimation()
        }

        if (this.attackBack == true) {
            this.x -= 4
        }
        if ((this.x < 0) && (this.attackBack == true)) {
            this.x = 0
            this.unicorn.classList.remove(`${this.colour}run`)
        }
    }

    attackMove2() {
        if ((this.x >= 1000) && (this.win == 1)) {
            console.log("hij doet het update 2")
            this.unicorn.classList.add(`${this.colour}run`)
            this.x -= 4
        }

        if ((this.x < 1000) && (this.attackBack == false)) {
            console.log("hij werkt nu wel 2")
            this.unicorn.classList.remove(`${this.colour}run`)

            this.win = 0
            this.explosion.flipped()
            this.attackAnimation()
        }

        if (this.attackBack == true) {
            this.x += 4
        }
        if ((this.x > window.innerWidth - this.unicorn.clientWidth) && (this.attackBack == true)) {
            this.x = window.innerWidth - this.unicorn.clientWidth
            this.unicorn.classList.remove(`${this.colour}run`)
        }
    }

    attackAnimation() {
        // doe attack move animation
        console.log("doe attack animation")
        let attackSound = new Audio('audio/attack.mp3')
        this.explosion.explode()
        attackSound.play()
        // this.explosion.style.display = "block";



        setTimeout(() => {
            this.attackBack = true;
            this.unicorn.classList.add(`${this.colour}run`)
            this.explosion.stopExplode()
            console.log("hoi = true")
        }, 2000);

    }
}




