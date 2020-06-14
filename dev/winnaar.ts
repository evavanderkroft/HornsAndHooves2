class Winner{
    private winnergif!: HTMLElement
    private pressany!: HTMLElement

    constructor(colour: string){

        this.creategif(colour)
        this.createpressany()
    }

    creategif(colour: string){
        this.winnergif = document.createElement("winnergif")
        let winner = document.getElementsByTagName("winner")[0]
        winner.appendChild(this.winnergif)

        this.winnergif.classList.add(`${colour}winner`)
    }
    public createpressany(){
        this.pressany = document.createElement("pressany")
        let winner = document.getElementsByTagName("winner")[0]
        winner.appendChild(this.pressany)

        this.pressany.addEventListener("click",(e:Event)=> this.onKeyboard(e))

    }
    
    onKeyboard(e: Event):void{
        console.log("hallo");
        (e.target as HTMLElement).style.filter= `invert(100%)`
    }
}
window.addEventListener("load", () => new Winner("green"))