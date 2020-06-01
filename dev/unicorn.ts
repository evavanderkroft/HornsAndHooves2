class Unicorn {
    private unicorn: HTMLElement
    private x: number = 0
    private y: number

    private rightkey: number
    private leftkey: number

    rightSpeed: number = 0
    leftSpeed: number = 0

    private win: number = 0
    public get _win(): number { return this.win }
    public set _win(A: number) { this.win = A }

    private win2: number = 0
    public get _win2(): number { return this.win2 }
    public set _win2(A: number) { this.win2 = A }

    constructor(x: number, rightKey: number, leftKey: number) {
        this.unicorn = document.createElement("unicorn")


        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.unicorn)
        this.rightkey = rightKey
        this.leftkey = leftKey


        if (x != 0) { x = window.innerWidth - this.unicorn.clientWidth }
        this.x = x
        this.y = 500
        window.addEventListener("keydown", (e: KeyboardEvent) => this.moveUnicorn(e))
    }


    private moveUnicorn(e: KeyboardEvent): void {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case this.rightkey:
                this.unicorn.classList.add("run")
                this.rightSpeed = 5
                setTimeout(() => {
                    this.rightSpeed = 0
                    // this.stopRunning()
                }, 1000);
                break
            case this.leftkey:
                this.unicorn.classList.add("run")
                this.leftSpeed = 5
                setTimeout(() => {
                    this.leftSpeed = 0
                    // this.stopRunning()
                }, 1000);
        }

    }

    public moveUnicorns() {

    }

    public update() {

        // this.x += this.rightSpeed


        if ((this.x < 800) && (this.win == 1)) {
            console.log("hij doet het update 1")
            this.unicorn.classList.add("run")
            this.x += 2

            if (this.x > 400) {
                console.log("hij werkt nu wel")
                this.unicorn.classList.remove("run")
                this.win = 0

            }

        }
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px)`

    }
    public update2() {

        // this.x -= this.rightSpeed
        // this.x += this.leftSpeed

        if ((this.x > 800) && (this.win2 == 1)) {
            console.log("hij doet het update 2")
            this.unicorn.classList.add("run")
            this.x -= 2

            if (this.x < 800) {


                this.win2 = 0
                this.unicorn.classList.remove("run")


                setTimeout(() => {
                    this.x += 2
                },
                    1000);

                if (this.x == window.innerWidth - this.unicorn.clientWidth) {
                    this.x = 0
                }
            }

        }


        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(-1)`
    }
    // public stopRunning() {
    //     this.unicorn.classList.remove("run")
    // }
    public getRectangle() {
        return this.unicorn.getBoundingClientRect()
    }
    public bounceX() {
        this.rightSpeed = -1
        this.unicorn.classList.remove("run")
        setTimeout(() => {
            this.rightSpeed = 0
        }, 300);
    }
}




