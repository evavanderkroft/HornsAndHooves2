class Game {

    private unicorn: Unicorn
    private unicorn2: Unicorn
    private frog: Frog
    private score : number = 10
    private score2 : number = 10


    constructor(player1:string, player2: string) {
        console.log(player1,player2)

        console.log("Game was created!")
        let first =  Math.floor(Math.random() * 6)
        let second = Math.floor(Math.random() * 6)
        let third = Math.floor(Math.random() * 6)
        let fourth = Math.floor(Math.random() * 6)
        new Leftarrows(first, second, third, fourth)
        new Rightarrows(first, second, third, fourth)
        this.unicorn = new Unicorn(0,68,65)
        this.unicorn2 = new Unicorn(2,37,39)
        this.frog = new Frog()
        this.gameloop()
    
    }
    
    
    private gameloop() {
        this.unicorn.update()
        this.unicorn2.update2()
        this.frog.updateFrog()

        if (this.checkCollision(this.unicorn.getRectangle(), this.unicorn2.getRectangle())) {
            console.log("Attack p1")
            this.removePoint(1)
            this.unicorn2.bounceX()
        
        }
        if (this.checkCollision(this.unicorn.getRectangle(), this.unicorn2.getRectangle())) {
            console.log("Attack p2")
            this.removePoint(2)
            this.unicorn.bounceX()
        }

        if (this.score <= 1){
            this.score = 10
            this.score2 = 10
            console.log("player 2 won!")
        }
        if (this.score2 <= 1){
            this.score = 10
            this.score2 = 10
            console.log("player 1 won!")
            
        }
        requestAnimationFrame(() => this.gameloop())
        

    }
    
     checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left<= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
  
        }
        private removePoint(player : number) {
            if(player == 1) {
               let score = document.getElementsByTagName("score")[0]
               this.score --
               score.innerHTML = "Score: "+this.score
            } else {
               let score = document.getElementsByTagName("score")[1]
               this.score2 --
               score.innerHTML = "Score: "+this.score2
            }
        }

}
window.addEventListener("load", () => new Game("white", "black"))