class Unicorn2 {
    private unicorn2: HTMLElement
    private x: number
    private y: number

    private rightkey: number
    private leftkey: number

    rightSpeed: number = 0
    leftSpeed: number = 0
    constructor() {
        this.unicorn2 = document.createElement("unicorn2")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.unicorn2)

        this.leftkey = 39
        this.rightkey = 37

        this.x = window.innerWidth - this.unicorn2.clientWidth
        this.y = 400

        window.addEventListener("keydown", (e: KeyboardEvent) => this.moveUnicorn(e))
    }

    private moveUnicorn(e: KeyboardEvent): void {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case this.rightkey:
                this.rightSpeed = 5
                setTimeout(() => {
                    this.rightSpeed = 0
                }, 1000);
                break
            case this.leftkey:
                this.leftSpeed = 5
                setTimeout(() => {
                    this.leftSpeed = 0
                }, 1000);

        }

    }


    // private attackMove() {

    // }

    public update2() {

        this.x -= this.rightSpeed
        this.x += this.leftSpeed
        this.unicorn2.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}



