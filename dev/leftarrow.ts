class Leftarrow {

    private leftarrow!: HTMLElement
    private game: HTMLElement
    
    private _x: number = 0
    public get x() : number {return this._x}

    constructor() { 
        this.game = document.getElementsByTagName("game")[0] as HTMLElement
        this.createleftarrow()
        window.addEventListener("keydown", (e:KeyboardEvent) => this.keypressleft(e))
        
    } 

    createleftarrow(){
        


        this.leftarrow = document.createElement("leftarrow")
        this.game.appendChild(this.leftarrow)
    
        let x = ((window.innerWidth * 0.25) - (this.leftarrow.clientWidth /2))
        let y = ((window.innerHeight * 0.25)- (this.leftarrow.clientWidth /2))
    
        this.leftarrow.style.transform = `translate(${x}px, ${y}px)`
        
        this._x = Math.floor(Math.random() * 4)
        console.log(this._x)
        if (this._x==0){
            this.leftarrow.classList.add("left")
        }
        else if (this._x==1){
            this.leftarrow.classList.add("right")
        }
        else if (this._x==2){
            this.leftarrow.classList.add("down")
        }
        else if (this._x==3){
            this.leftarrow.classList.add("up")
        }

    }
    keypressleft(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 65:
                //left
                if (this._x == 0){
                    this.leftarrow.remove()
                    this.createleftarrow()
                }
                break
            case 68:
                //right
                if (this._x == 1){
                    this.leftarrow.remove()
                    this.createleftarrow()
                }
                break
            case 83:
                //down
                if (this._x == 2){
                    this.leftarrow.remove()
                    this.createleftarrow()
                }
                break
            case 87:
                //up
                if (this._x == 3){
                    this.leftarrow.remove()
                    this.createleftarrow()
                }
                break

        }
    }
}