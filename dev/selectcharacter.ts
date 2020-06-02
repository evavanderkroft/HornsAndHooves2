class Selectcharacter{
    
    private selectcharacter!:HTMLElement

    private character_1!: HTMLElement
    private character_2!: HTMLElement
    private plateau!: HTMLElement
    private profile!: HTMLElement
    private _check: boolean = false
    public get check() : boolean {return this._check}

    private _chosen: string = ''
    public get chosen() : string {return this._chosen}

    constructor() {

        let y=((window.innerHeight *0.5)-100)
        let x1=((window.innerWidth * 0.10))
        this.createplateau(x1,y)
        let x2= ((window.innerWidth * 0.90)- 500)
        this.createplateau(x2,y)

        this.createcharacter_1()
        this.createcharacter_2()

        let colours= ["black", "green", "pink", "white"]
        colours.forEach(colour => {
            this.createProfile(colour)
        });
    }
    public createProfile(colour: string){
        console.log('hallo')
        this.profile = document.createElement("profile")
        let selectcharacter = document.getElementsByTagName("selectcharacter")[0]
        selectcharacter.appendChild(this.profile)

        this.profile.addEventListener("click", () => this.onProfileClick(colour))
        this.profile.classList.add(`p${colour}`)
        let x= (window.innerWidth* 0.17)
        this.profile.style.height= `${x}px`
        this.profile.style.width= `${x}px`

    }
    public createplateau(x:number, y:number){
            this.plateau = document.createElement("plateau")
            let plateau = document.getElementsByTagName("selectcharacter")[0]
            plateau.appendChild(this.plateau)
            this.plateau.style.transform = `translate(${x}px, ${y}px)`

    }
    createcharacter_1(){
        this.character_1 = document.createElement("character_1")
        let selectcharacter = document.getElementsByTagName("selectcharacter")[0]
        selectcharacter.appendChild(this.character_1)

    }
    createcharacter_2(){
        this.character_2 = document.createElement("character_2")
        let selectcharacter = document.getElementsByTagName("selectcharacter")[0]
        selectcharacter.appendChild(this.character_2)

    }

    public onProfileClick(colour: string){
        let horses = []
        if (this._check== true){
            if(this._chosen != colour){
                this._check= true
                this.character_2.classList.add(`c${colour}`)
                horses.push(colour)
                new Game(horses[0],horses[1])
                
            }
        }
        if (this._check== false){
            this._check= true
            this.character_1.classList.add(`c${colour}`)
            horses.push(colour)
        }
        this._chosen = colour
        console.log(this._chosen)


    }

}
window.addEventListener("load", () => new Selectcharacter())