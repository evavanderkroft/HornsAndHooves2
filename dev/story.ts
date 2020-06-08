class Story{
    private storybg!: HTMLElement
    private storyknop!: HTMLElement

    constructor(player_1: string, player_2: string) {
        this.createbackground(player_1, player_2)
        this.createstoryknop()
    }
    
    createbackground(player_1:string, player_2:string){
        // creer css elment genaamd background
        this.storybg= document.createElement("storybg")
        let story= document.getElementsByTagName(`story`)[0]
        story.appendChild(this.storybg)

        if (player_1== "zwart" && player_2 == "wit" ||player_1== "wit" && player_2 == "zwart" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg1`)
            console.log(`hallo`)
        }
        else if (player_1== "zwart" && player_2 == "groen"||player_1== "groen" && player_2 == "zwart" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg2`)
            console.log(`hallo`)
        }
        else if (player_1== "groen" && player_2 == "roze"||player_1== "roze" && player_2 == "groen" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg3`)
            console.log(`hallo`)
        }
        else if (player_1== "groen" && player_2 == "wit"||player_1== "wit" && player_2 == "groen" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg2`)
            console.log(`hallo`)
        }
        else if (player_1== "zwart" && player_2 == "roze"||player_1== "roze" && player_2 == "zwart" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg4`)
            console.log(`hallo`)
        }
        else if (player_1== "wit" && player_2 == "roze"||player_1== "roze" && player_2 == "wit" ){
            // voeg een css element toe aan background
            this.storybg.classList.add(`bg4`)
            console.log(`hallo`)
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
        (e.target as HTMLElement).style.filter= `grayscale(1)`;
    }

}