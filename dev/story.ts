class Story{
    private storybg!: HTMLElement
    private storyknop!: HTMLElement

    private _next: boolean= false
    public get next():boolean{return this._next}
    private _background: string = ""
    public get background():string{return this._background}


    constructor(player_1: string, player_2: string) {
        this.createbackground(player_1, player_2)
        this.createstoryknop()
    }
    
    createbackground(player_1:string, player_2:string){
        // creer css elment genaamd background
        this.storybg= document.createElement("storybg")
        let story= document.getElementsByTagName(`story`)[0]
        story.appendChild(this.storybg)

        if (player_1== "black" && player_2 == "white" ||player_1== "white" && player_2 == "black" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg1`)
            console.log(`hallo`)
            this._background = "SkyClouds"
        }
        else if (player_1== "black" && player_2 == "green"||player_1== "green" && player_2 == "black" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg2`)
            console.log(`hallo`)
            this._background = "RainbowForest"
        }
        else if (player_1== "green" && player_2 == "pink"||player_1== "pink" && player_2 == "green" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg3`)
            console.log(`hallo`)
            this._background = "SpaceCastle"
        }
        else if (player_1== "green" && player_2 == "white"||player_1== "white" && player_2 == "green" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg2`)
            console.log(`hallo`)
            this._background = "RainbowForest"
        }
        else if (player_1== "black" && player_2 == "pink"||player_1== "pink" && player_2 == "black" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg4`)
            console.log(`hallo`)
            this._background = "ArenaOrange"
        }
        else if (player_1== "white" && player_2 == "pink"||player_1== "pink" && player_2 == "white" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg4`)
            console.log(`hallo`)
            this._background = "ArenaOrange"
        }

    }
    createstoryknop(){
        this.storyknop= document.createElement("fightknop")
        let story= document.getElementsByTagName(`story`)[0]
        story.appendChild(this.storyknop)

        this.storyknop.addEventListener("click", (e:Event)=>this.onstoryknopClick(e))

        let x = ((window.innerWidth /2)- (this.storyknop.clientWidth /2))
        let y = ((window.innerHeight * 0.85))
    
        this.storyknop.style.transform = `translate(${x}px, ${y}px)`
    }
    public onstoryknopClick(e:Event){
        this._next = true;
        (e.target as HTMLElement).style.filter= `grayscale(1)`;
    }

}