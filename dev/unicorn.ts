class Unicorn {
    private unicorn: HTMLElement
    private x: number
    private y: number

    private rightkey: number
    private leftkey: number

    rightSpeed: number = 0
    leftSpeed: number = 0

    constructor(x:number, rightKey:number, leftKey:number) {
        this.unicorn = document.createElement("unicorn")


        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.unicorn)
        this.rightkey = rightKey
        this.leftkey = leftKey


        if(x != 0) {x = window.innerWidth-this.unicorn.clientWidth}
        this.x = x
        this.y = 400
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
                    this.running()
                }, 1000);
                break
            case this.leftkey:
                this.unicorn.classList.add("run")
                this.leftSpeed = 5
                setTimeout(() => {
                    this.leftSpeed = 0
                    this.running()
                }, 1000);
        }

    }


    public update() {

        this.x += this.rightSpeed
        this.x -= this.leftSpeed
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    public update2() {

        this.x -= this.rightSpeed
        this.x += this.leftSpeed
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(-1)`
    }
    running(){
        this.unicorn.classList.remove("run")
    }
    public getRectangle() {
        return this.unicorn.getBoundingClientRect()
    }
    public bounceX(){
        this.rightSpeed =-1
        this.running()
        setTimeout(() => {
            this.rightSpeed = 0
        }, 300);
    }
}




