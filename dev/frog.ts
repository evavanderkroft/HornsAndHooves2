class Frog {

    private frog: HTMLElement
    private keyinfo: number

    constructor() {
        this.frog = document.createElement("frog")
        console.log("Frog was created!")
        this.keyinfo = 32;
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onFrogClick(e))
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.frog)

    }

    public updateFrog() {
        let x = ((window.innerWidth * 0.5) - (this.frog.clientWidth / 2))
        let y = window.innerHeight-915
        this.frog.style.transform = `translate(${x}px, ${y}px) scale(0.3)`;


    }

    private onFrogClick(e: KeyboardEvent): void {
        // Hiermee kan je checken welke keycode achter een bepaalde toets zit. 
        console.log(e.keyCode)
        let tipnmr = Math.floor(Math.random() * 5)
        let kikkergeluid = new Audio('audio/kikker.mp3')

        switch (e.keyCode) {
            case this.keyinfo:
                this.frog.classList.add("talk" + tipnmr)
                kikkergeluid.play()
                setTimeout(() => {
                    this.talking()

                }, 3500);

        }
    }
    talking() {
        this.frog.setAttribute("class", "")

    }
}