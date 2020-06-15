class Lifeheart{
    private lifeheart: HTMLElement
    private x: number
    private y: number


    constructor(x: number){
        this.lifeheart = document.createElement("lifeheart")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.lifeheart)
        

        this.y = 40

    }
    public lifeupdate(){
        this.lifeheart.style.transform = `scale(0.2)`
    }
}