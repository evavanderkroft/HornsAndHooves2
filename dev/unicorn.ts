class Unicorn {
    private unicorn: HTMLElement
    private x: number
    private y: number

    private rightkey: number
    private leftkey: number

    rightSpeed: number = 0
    leftSpeed: number = 0

    constructor() {
        this.unicorn = document.createElement("unicorn")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.unicorn)

        this.rightkey = 68
        this.leftkey = 65

        this.x = 0
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


    public update() {

        this.x += this.rightSpeed
        this.x -= this.leftSpeed
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}



