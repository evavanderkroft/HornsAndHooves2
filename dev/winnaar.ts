class Winner{
    private background!: HTMLElement
    private winnergif!: HTMLElement
    private quitknop!: HTMLElement
    private againknop!: HTMLElement
    private winnerplat!: HTMLElement

    private _next: boolean= false
    public get next():boolean{return this._next}

    constructor(colour: string){
        this.createbackground()
        this.createwinnerplat()
        this.creategif(colour)
        this.createquit()
        this.createagain()
    }
    
    createbackground(){
        this.background = document.createElement("background")
        let winner = document.getElementsByTagName("winner")[0]
        winner.appendChild(this.background)
    }

    creategif(colour: string){
        this.winnergif = document.createElement("winnergif")
        let winner = document.getElementsByTagName("winner")[0]
        winner.appendChild(this.winnergif)

        this.winnergif.classList.add(`${colour}winner`)
    }
    createwinnerplat(){
        this.winnerplat = document.createElement("winnerplat")
        let winner = document.getElementsByTagName("winner")[0]
        winner.appendChild(this.winnerplat)
    }

    createagain(){
        this.againknop = document.createElement("againknop")
        let winner = document.getElementsByTagName("winner")[0]
        winner.appendChild(this.againknop)

        this.againknop.addEventListener("click", (e: Event) => this.onagainKlick(e,))
    }
    createquit(){
        this.quitknop = document.createElement("quitknop")
        let winner = document.getElementsByTagName("winner")[0]
        winner.appendChild(this.quitknop)

        this.quitknop.addEventListener("click", (e: Event) => this.onquitKlick(e,))
    }
    
    onagainKlick(e: Event):void{
        console.log("hallo");
        (e.target as HTMLElement).style.filter= `grayscale(1)`
        this._next= true;
    }
    onquitKlick(e: Event):void{
        console.log("hallo");
        (e.target as HTMLElement).style.filter= `grayscale(1)`
        window.location.href = 'homescreen.html';
    }
}