class Control{
    // private game: Game
    // // private selecharacter: Selectcharacter
    // private story: Story

    public player1: string = ""
    public player2: string = ""

    constructor(){
        // new Selectcharacter()
        new Game(this.player1, this.player2)        
    }

    public startStory(character1: string, character2: string){
        this.player1 = character1
        this.player2 = character2
    
    }

    public startGame(){
    }

}
window.addEventListener("load", () => new Control())