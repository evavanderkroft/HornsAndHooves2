class Leftarrows {

    private leftarrow_1!: HTMLElement
    private leftarrow_2!: HTMLElement
    private leftarrow_3!: HTMLElement
    private leftarrow_4!: HTMLElement
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
        this.createleftarrow_1()
        this.createleftarrow_2()
        this.createleftarrow_3()
        this.createleftarrow_4()
        window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_1(e))

    }

    createleftarrow_1() {

        this.leftarrow_1 = document.createElement("leftarrow_1")
        this.game.appendChild(this.leftarrow_1)


        if (this._x_1 == 0) {
            this.leftarrow_1.classList.add("leftup")
        }
        else if (this._x_1 == 1) {
            this.leftarrow_1.classList.add("up")
        }
        else if (this._x_1 == 2) {
            this.leftarrow_1.classList.add("rightup")
        }
        else if (this._x_1 == 3) {
            this.leftarrow_1.classList.add("leftdown")
        }
        else if (this._x_1 == 4) {
            this.leftarrow_1.classList.add("down")
        }
        else if (this._x_1 == 5) {
            this.leftarrow_1.classList.add("rightdown")
        }

        let x = ((window.innerWidth * 0.025))
        let y = ((window.innerHeight * 0.2) - (this.leftarrow_1.clientHeight * this._scale / 2))

        this.leftarrow_1.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`

    }
    createleftarrow_2() {



        this.leftarrow_2 = document.createElement("leftarrow_2")
        this.game.appendChild(this.leftarrow_2)

        if (this._x_2 == 0) {
            this.leftarrow_2.classList.add("leftup")
        }
        else if (this._x_2 == 1) {
            this.leftarrow_2.classList.add("up")
        }
        else if (this._x_2 == 2) {
            this.leftarrow_2.classList.add("rightup")
        }
        else if (this._x_2 == 3) {
            this.leftarrow_2.classList.add("leftdown")
        }
        else if (this._x_2 == 4) {
            this.leftarrow_2.classList.add("down")
        }
        else if (this._x_2 == 5) {
            this.leftarrow_2.classList.add("rightdown")
        }

        let x = ((window.innerWidth * 0.025) + this.leftarrow_2.clientWidth * this._scale)
        let y = ((window.innerHeight * 0.2) - (this.leftarrow_2.clientHeight * this._scale / 2))

        this.leftarrow_2.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`
    }
    createleftarrow_3() {



        this.leftarrow_3 = document.createElement("leftarrow_3")
        this.game.appendChild(this.leftarrow_3)

        if (this._x_3 == 0) {
            this.leftarrow_3.classList.add("leftup")
        }
        else if (this._x_3 == 1) {
            this.leftarrow_3.classList.add("up")
        }
        else if (this._x_3 == 2) {
            this.leftarrow_3.classList.add("rightup")
        }
        else if (this._x_3 == 3) {
            this.leftarrow_3.classList.add("leftdown")
        }
        else if (this._x_3 == 4) {
            this.leftarrow_3.classList.add("down")
        }
        else if (this._x_3 == 5) {
            this.leftarrow_3.classList.add("rightdown")
        }

        let x = ((window.innerWidth * 0.025) + (this.leftarrow_3.clientWidth * this._scale * 2))
        let y = ((window.innerHeight * 0.2) - (this.leftarrow_3.clientHeight * this._scale / 2))

        this.leftarrow_3.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`
    }
    createleftarrow_4() {



        this.leftarrow_4 = document.createElement("leftarrow_4")
        this.game.appendChild(this.leftarrow_4)

        if (this._x_4 == 0) {
            this.leftarrow_4.classList.add("leftup")
        }
        else if (this._x_4 == 1) {
            this.leftarrow_4.classList.add("up")
        }
        else if (this._x_4 == 2) {
            this.leftarrow_4.classList.add("rightup")
        }
        else if (this._x_4 == 3) {
            this.leftarrow_4.classList.add("leftdown")
        }
        else if (this._x_4 == 4) {
            this.leftarrow_4.classList.add("down")
        }
        else if (this._x_4 == 5) {
            this.leftarrow_4.classList.add("rightdown")
        }

        let x = ((window.innerWidth * 0.025) + (this.leftarrow_4.clientWidth * this._scale * 3))
        let y = ((window.innerHeight * 0.2) - (this.leftarrow_4.clientHeight * this._scale / 2))

        this.leftarrow_4.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`
    }
    keypressleft_1(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case 81:
                //left up
                if (this._x_1 == 0) {
                    this.leftarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_2(e))

                }
                break
            case 87:
                //up
                if (this._x_1 == 1) {
                    this.leftarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_2(e))
                }
                break
            case 69:
                //rightup
                if (this._x_1 == 2) {
                    this.leftarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_2(e))
                }
                break
            case 65:
                //leftdown
                if (this._x_1 == 3) {
                    this.leftarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_2(e))
                }
                break
            case 83:
                //down
                if (this._x_1 == 4) {
                    this.leftarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_2(e))
                }
                break
            case 68:
                //rightdown
                if (this._x_1 == 5) {
                    this.leftarrow_1.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_2(e))
                }
                break


        }
    }
    keypressleft_2(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case 81:
                //left up
                if (this._x_2 == 0) {
                    this.leftarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_3(e))

                }
                break
            case 87:
                //up
                if (this._x_2 == 1) {
                    this.leftarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_3(e))
                }
                break
            case 69:
                //rightup
                if (this._x_2 == 2) {
                    this.leftarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_3(e))
                }
                break
            case 65:
                //leftdown
                if (this._x_2 == 3) {
                    this.leftarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_3(e))
                }
                break
            case 83:
                //down
                if (this._x_2 == 4) {
                    this.leftarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_3(e))
                }
                break
            case 68:
                //rightdown
                if (this._x_2 == 5) {
                    this.leftarrow_2.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_3(e))
                }
                break


        }
    }
    keypressleft_3(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case 81:
                //left up
                if (this._x_3 == 0) {
                    this.leftarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_4(e))

                }
                break
            case 87:
                //up
                if (this._x_3 == 1) {
                    this.leftarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_4(e))
                }
                break
            case 69:
                //rightup
                if (this._x_3 == 2) {
                    this.leftarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_4(e))
                }
                break
            case 65:
                //leftdown
                if (this._x_3 == 3) {
                    this.leftarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_4(e))
                }
                break
            case 83:
                //down
                if (this._x_3 == 4) {
                    this.leftarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_4(e))
                }
                break
            case 68:
                //rightdown
                if (this._x_3 == 5) {
                    this.leftarrow_3.remove()
                    window.addEventListener("keydown", (e: KeyboardEvent) => this.keypressleft_4(e))
                }
                break


        }
    }
    keypressleft_4(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case 81:
                //left up
                if (this._x_4 == 0) {
                    this.leftarrow_4.remove()
                    this.win = 1

                }
                break
            case 87:
                //up
                if (this._x_4 == 1) {
                    this.leftarrow_4.remove()
                    this.win = 1
                }
                break
            case 69:
                //rightup
                if (this._x_4 == 2) {
                    this.leftarrow_4.remove()
                    this.win = 1
                }
                break
            case 65:
                //leftdown
                if (this._x_4 == 3) {
                    this.leftarrow_4.remove()
                    this.win = 1
                }
                break
            case 83:
                //down
                if (this._x_4 == 4) {
                    this.leftarrow_4.remove()
                    this.win = 1
                }
                break
            case 68:
                //rightdown
                if (this._x_4 == 5) {
                    this.leftarrow_4.remove()
                    this.win = 1
                }
                break

        }
    }

    public delete() {
        this.leftarrow_1.remove()
        this.leftarrow_2.remove()
        this.leftarrow_3.remove()
        this.leftarrow_4.remove()
    }
}