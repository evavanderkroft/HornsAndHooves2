class Control {
    public selectcharacter?: Selectcharacter
    public createselect!: HTMLElement
    public story?: Story
    public createstory!: HTMLElement
    public game?: Game
    public creategame!: HTMLElement
    public winner?: Winner
    public createwinner!: HTMLElement

    private _player1: string = ""
    public get player1(): string { return this._player1 }
    private _player2: string = ""
    public get player2():string{return this._player2}
    private _background: string = ""
    public get background():string{return this._background}

    constructor() {
        this.createselectpage();
        this.gameLoop();
        let themeSong = new Audio('audio/ThemeSong.mp3');
        themeSong.play();
        themeSong.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    private createselectpage() {
        this.createselect = document.createElement("selectcharacter")
        let control = document.getElementsByTagName("control")[0]
        control.appendChild(this.createselect)

        this.selectcharacter = new Selectcharacter()
    }
    private createstorypage() {
        this.createstory = document.createElement("story")
        let control = document.getElementsByTagName("control")[0]
        control.appendChild(this.createstory)

        this.story = new Story(this.player1, this.player2)
    }
    private creategamepage() {
        this.creategame = document.createElement("game")
        let control = document.getElementsByTagName("control")[0]
        control.appendChild(this.creategame)
        
        this.game = new Game(this.player1, this.player2, this._background)
    }
    private createwinnerpage(winner: string) {
        this.createwinner = document.createElement("winner")
        let control = document.getElementsByTagName("control")[0]
        control.appendChild(this.createwinner)

        this.winner = new Winner(winner)
    }

    public gameLoop() {
        if (this.selectcharacter != null &&
            this.selectcharacter.next == true) {
            console.log("story")
            this._player1 = this.selectcharacter.horse1
            this._player2 = this.selectcharacter.horse2
            console.log(this._player1, this._player2)

            this.createstorypage()
            this.selectcharacter = undefined
            document.getElementsByTagName('selectcharacter')[0].remove();
        }
        if(this.story != null &&
            this.story.next== true){
                this._background = this.story.background
                this.creategamepage()
                
                this.story = undefined;
                document.getElementsByTagName('story')[0].remove();

        }
        if (this.game != null &&
            this.game.next == true) {
            this.createwinnerpage(this.game.winner)


            this.game = undefined;
            document.getElementsByTagName('game')[0].remove();
        }

        if (this.winner != null &&
            this.winner.next == true) {
            this.createselectpage()
            this.winner = undefined;
            document.getElementsByTagName('winner')[0].remove();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
}
window.addEventListener("load", () => new Control())