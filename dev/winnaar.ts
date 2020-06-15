class Winner{
    private winnergif!: HTMLElement
    private quitknop!: HTMLElement
    private againknop!: HTMLElement
    private winnerplat!: HTMLElement

    constructor(colour: string){
        this.createwinnerplat()
        this.creategif(colour)
        this.createquit()
        this.createagain()
    }

    creategif(colour: string){
        this.winnergif = document.createElement("winnergif")
        let winner = document.getElementsByTagName("winner")[0]
        winner.appendChild(this.winnergif)

        this.winnergif.classList.add(`${colour}winner`)
    }

    createquit(){
        this.quitknop = document.createElement("quitknop")
        let winner = document.getElementsByTagName("winner")[0]
        winner.appendChild(this.quitknop)

        this.quitknop.addEventListener("click", (e: Event) => this.onKlick(e,))
    }
    createagain(){
        this.againknop = document.createElement("againknop")
        let winner = document.getElementsByTagName("winner")[0]
        winner.appendChild(this.againknop)

        this.againknop.addEventListener("click", (e: Event) => this.onKlick(e,))
    }
    createwinnerplat(){
        this.winnerplat = document.createElement("winnerplat")
        let winner = document.getElementsByTagName("winner")[0]
        winner.appendChild(this.winnerplat)
    }
    
    onKlick(e: Event):void{
        console.log("hallo");
        (e.target as HTMLElement).style.filter= `grayscale(1)`
    }
}
window.addEventListener("load", () => new Winner("black"))