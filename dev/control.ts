class Control{
    // private game: Game
    private selecharacter?: Selectcharacter

    private _player1: string = ""
    public get player1():string{return this._player1}
    private _player2: string = ""
    public get player2():string{return this._player2}

    constructor(){
        this.selecharacter = new Selectcharacter()
        // new Game(this.player1, this.player2)  
        
        this.gameLoop();
    }

    public gameLoop(){
        if(this.selecharacter != null &&
            this.selecharacter.selected == true){
                console.log("story")
                this._player1 = this.selecharacter.horse1
                this._player2 = this.selecharacter.horse2
                // new Story(this._player1, this._player2)
                
                this.selecharacter = undefined;
                document.getElementsByTagName('selectcharacter')[0].remove();
        }  
        requestAnimationFrame(() => this.gameLoop());
    }
}
// window.addEventListener("load", () => new Control())