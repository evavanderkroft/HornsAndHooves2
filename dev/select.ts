class Select{

    private greenSelect: HTMLElement
    private blackSelect: HTMLElement
    private blackSelect: HTMLElement
    private blackSelect: HTMLElement

    private _character_1: string = ""
    public get character_1() : string {return this._character_1}
    private _character_2: string = ""
    public get character_2() : string {return this._character_2}
    private _check_1: boolean = false
    public get check_1() : boolean {return this._check_1}
    private _check_2: boolean = false
    public get check_2() : boolean {return this._check_2}


    constructor() {
        
        this.selectGreen()
        this.selectPink()
        this.selectBlack()
        this.selectWhite()

        if (this.check_2 == true){
            this.select.addEventListener("click", () => this.onSelectClick())
        }

    }
    selectGreen(){
        this.greenSelect = document.createElement("greenSelect")
        this.greenSelect.addEventListener("click", () => this.onSelectClick())
    }
    selectPink(){

    }
    selectBlack(){

    }
    selectWhite(){

    }

    startgame(){

    }
}