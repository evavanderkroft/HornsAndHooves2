class Rightarrows {

    private rightarrow_1!: HTMLElement
    private rightarrow_2!: HTMLElement
    private rightarrow_3!: HTMLElement
    private rightarrow_4!: HTMLElement
    private game: HTMLElement

    private win: number = 0
    public get _win(): number { return this.win }
    public set _win(A: number) { this.win = A }

    private _x_1: number = 0
    public get x_1(): number { return this._x_1 }
    private _x_2: number = 0
    public get x_2(): number { return this._x_2 }
    private _x_3: number = 0
    public get x_3(): number { return this._x_3 }
    private _x_4: number = 0
    public get x_4(): number { return this._x_4 }

    private _scale: number = 0
    public get scale(): number { return this._scale }

    constructor(_x_1: number, _x_2: number, _x_3: number, _x_4: number) {
        console.log("de nummers zijn", _x_1, _x_2, _x_3, _x_4)
        this._x_1 = _x_1
        this._x_2 = _x_2
        this._x_3 = _x_3
        this._x_4 = _x_4

        this._scale = 0.7
        this.game = document.getElementsByTagName("game")[0] as HTMLElement
        this.createrightarrow_1()
        this.createrightarrow_2()
        this.createrightarrow_3()
        this.createrightarrow_4()
        window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_1(e))

    }

    createrightarrow_1() {

        this.rightarrow_1 = document.createElement("rightarrow_1")
        this.game.appendChild(this.rightarrow_1)

        if (this._x_1 == 0) {
            this.rightarrow_1.classList.add("leftup")
        }
        else if (this._x_1 == 1) {
            this.rightarrow_1.classList.add("up")
        }
        else if (this._x_1 == 2) {
            this.rightarrow_1.classList.add("rightup")
        }
        else if (this._x_1 == 3) {
            this.rightarrow_1.classList.add("leftdown")
        }
        else if (this._x_1 == 4) {
            this.rightarrow_1.classList.add("down")
        }
        else if (this._x_1 == 5) {
            this.rightarrow_1.classList.add("rightdown")
        }

        let x = ((window.innerWidth * 0.975) - this.rightarrow_1.clientWidth * this._scale * 4)
        let y = ((window.innerHeight * 0.2) - (this.rightarrow_1.clientWidth * this._scale / 2))

        this.rightarrow_1.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`

    }
    createrightarrow_2() {



        this.rightarrow_2 = document.createElement("rightarrow_2")
        this.game.appendChild(this.rightarrow_2)

        if (this._x_2 == 0) {
            this.rightarrow_2.classList.add("leftup")
        }
        else if (this._x_2 == 1) {
            this.rightarrow_2.classList.add("up")
        }
        else if (this._x_2 == 2) {
            this.rightarrow_2.classList.add("rightup")
        }
        else if (this._x_2 == 3) {
            this.rightarrow_2.classList.add("leftdown")
        }
        else if (this._x_2 == 4) {
            this.rightarrow_2.classList.add("down")
        }
        else if (this._x_2 == 5) {
            this.rightarrow_2.classList.add("rightdown")
        }

        let x = ((window.innerWidth * 0.975) - this.rightarrow_2.clientWidth * this._scale * 3)
        let y = ((window.innerHeight * 0.2) - (this.rightarrow_2.clientWidth * this._scale / 2))

        this.rightarrow_2.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`
    }
    createrightarrow_3() {



        this.rightarrow_3 = document.createElement("rightarrow_3")
        this.game.appendChild(this.rightarrow_3)

        if (this._x_3 == 0) {
            this.rightarrow_3.classList.add("leftup")
        }
        else if (this._x_3 == 1) {
            this.rightarrow_3.classList.add("up")
        }
        else if (this._x_3 == 2) {
            this.rightarrow_3.classList.add("rightup")
        }
        else if (this._x_3 == 3) {
            this.rightarrow_3.classList.add("leftdown")
        }
        else if (this._x_3 == 4) {
            this.rightarrow_3.classList.add("down")
        }
        else if (this._x_3 == 5) {
            this.rightarrow_3.classList.add("rightdown")
        }

        let x = ((window.innerWidth * 0.975) - this.rightarrow_3.clientWidth * this._scale * 2)
        let y = ((window.innerHeight * 0.2) - (this.rightarrow_3.clientWidth * this._scale / 2))

        this.rightarrow_3.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`
    }
    createrightarrow_4() {



        this.rightarrow_4 = document.createElement("rightarrow_4")
        this.game.appendChild(this.rightarrow_4)

        if (this._x_4 == 0) {
            this.rightarrow_4.classList.add("leftup")
        }
        else if (this._x_4 == 1) {
            this.rightarrow_4.classList.add("up")
        }
        else if (this._x_4 == 2) {
            this.rightarrow_4.classList.add("rightup")
        }
        else if (this._x_4 == 3) {
            this.rightarrow_4.classList.add("leftdown")
        }
        else if (this._x_4 == 4) {
            this.rightarrow_4.classList.add("down")
        }
        else if (this._x_4 == 5) {
            this.rightarrow_4.classList.add("rightdown")
        }

        let x = ((window.innerWidth * 0.975) - this.rightarrow_1.clientWidth * this._scale)
        let y = ((window.innerHeight * 0.2) - (this.rightarrow_4.clientWidth * this._scale / 2))

        this.rightarrow_4.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`
    }
    keypressright_1(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case 74:
                //right up
                if (this._x_1 == 0) {
                    this.rightarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_2(e))

                }
                break
            case 75:
                //up
                if (this._x_1 == 1) {
                    this.rightarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_2(e))
                }
                break
            case 76:
                //rightup
                if (this._x_1 == 2) {
                    this.rightarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_2(e))
                }
                break
            case 78:
                //rightdown
                if (this._x_1 == 3) {
                    this.rightarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_2(e))
                }
                break
            case 77:
                //down
                if (this._x_1 == 4) {
                    this.rightarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_2(e))
                }
                break
            case 188:
                //rightdown
                if (this._x_1 == 5) {
                    this.rightarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_2(e))
                }
                break


        }
    }
    keypressright_2(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case 74:
                //right up
                if (this._x_2 == 0) {
                    this.rightarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_3(e))

                }
                break
            case 75:
                //up
                if (this._x_2 == 1) {
                    this.rightarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_3(e))
                }
                break
            case 76:
                //rightup
                if (this._x_2 == 2) {
                    this.rightarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_3(e))
                }
                break
            case 78:
                //rightdown
                if (this._x_2 == 3) {
                    this.rightarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_3(e))
                }
                break
            case 77:
                //down
                if (this._x_2 == 4) {
                    this.rightarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_3(e))
                }
                break
            case 188:
                //rightdown
                if (this._x_2 == 5) {
                    this.rightarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_3(e))
                }
                break


        }
    }
    keypressright_3(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case 74:
                //right up
                if (this._x_3 == 0) {
                    this.rightarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_4(e))

                }
                break
            case 75:
                //up
                if (this._x_3 == 1) {
                    this.rightarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_4(e))
                }
                break
            case 76:
                //rightup
                if (this._x_3 == 2) {
                    this.rightarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_4(e))
                }
                break
            case 78:
                //rightdown
                if (this._x_3 == 3) {
                    this.rightarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_4(e))
                }
                break
            case 77:
                //down
                if (this._x_3 == 4) {
                    this.rightarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_4(e))
                }
                break
            case 188:
                //rightdown
                if (this._x_3 == 5) {
                    this.rightarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressright_4(e))
                }
                break


        }
    }
    keypressright_4(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case 74:
                //right up
                if (this._x_4 == 0) {
                    this.rightarrow_4.remove()
                    this.win = 1
                }
                break
            case 75:
                //up            
                if (this._x_4 == 1) {
                    this.rightarrow_4.remove()
                    this.win = 1
                }
                break
            case 76:
                //rightup
                if (this._x_4 == 2) {
                    this.rightarrow_4.remove()
                    this.win = 1
                }
                break
            case 78:
                //rightdown
                if (this._x_4 == 3) {
                    this.rightarrow_4.remove()
                    this.win = 1
                }
                break
            case 77:
                //down
                if (this._x_4 == 4) {
                    this.rightarrow_4.remove()
                    this.win = 1
                }
                break
            case 188:
                //rightdown
                if (this._x_4 == 5) {
                    this.rightarrow_4.remove()
                    this.win = 1
                }
                break

        }
    }
    public delete() {
        this.rightarrow_1.remove()
        this.rightarrow_2.remove()
        this.rightarrow_3.remove()
        this.rightarrow_4.remove()
    }
}