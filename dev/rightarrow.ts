class Rightarrow {

    private rightarrow!: HTMLElement
    private game: HTMLElement
    
    private _x: number = 0
    public get x() : number {return this._x}

    constructor() { 
        this.game = document.getElementsByTagName("game")[0] as HTMLElement
        this.createrightarrow()
        window.addEventListener("keydown", (e:KeyboardEvent) => this.keypressright(e))
        
    } 

    createrightarrow(){
        


        this.rightarrow = document.createElement("rightarrow")
        this.game.appendChild(this.rightarrow)
    
        let x = ((window.innerWidth * 0.75) - (this.rightarrow.clientWidth /2))
        let y = ((window.innerHeight * 0.25)- (this.rightarrow.clientWidth /2))
    
        this.rightarrow.style.transform = `translate(${x}px, ${y}px)`
        
        this._x = Math.floor(Math.random() * 4)
        console.log(this._x)
        if (this._x==0){
            this.rightarrow.classList.add("left")
        }
        else if (this._x==1){
            this.rightarrow.classList.add("right")
        }
        else if (this._x==2){
            this.rightarrow.classList.add("down")
        }
        else if (this._x==3){
            this.rightarrow.classList.add("up")
        }

    }
    keypressright(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 37:
                //left
                if (this._x == 0){
                    this.rightarrow.remove()
                    this.createrightarrow()
                }
                break
            case 39:
                //right
                if (this._x == 1){
                    this.rightarrow.remove()
                    this.createrightarrow()
                }
                break
            case 40:
                //down
                if (this._x == 2){
                    this.rightarrow.remove()
                    this.createrightarrow()
                }
                break
            case 38:
                //up
                if (this._x == 3){
                    this.rightarrow.remove()
                    this.createrightarrow()
                }
                break

        }
    }
}