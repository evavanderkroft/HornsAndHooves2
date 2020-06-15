class Lifeheart {
    private lifeheart: HTMLElement
    private x: number
    private y: number


    constructor(x: number) {
        this.lifeheart = document.createElement("lifeheart")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.lifeheart)


        this.y = -60
        this.x = x

    }
    public lifeupdate() {
        this.lifeheart.style.transform = `translate(${this.x}px, ${this.y}px) scale(0.3)`
        console.log(this.x)
        console.log(this.y)
    }
}