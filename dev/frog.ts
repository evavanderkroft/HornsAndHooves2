class Frog {

    private frog: HTMLElement
    private keyinfo: number

    constructor() {
        this.frog = document.createElement("frog")
        console.log("Frog was created!")
        this.keyinfo = 73;
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onFrogClick(e))
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.frog)

    }

    public updateFrog() {
        this.frog.style.transform = `translate(500px, 0px) scale(0.3)`;


    }

    private onFrogClick(e: KeyboardEvent): void {
        // Hiermee kan je checken welke keycode achter een bepaalde toets zit. 
        console.log(e.keyCode)

        switch (e.keyCode) {
            case this.keyinfo:
                this.frog.classList.add("talk")
                setTimeout(() => {
                    this.talking()
                }, 3000);

        }
    }
    talking() {
        this.frog.classList.remove("talk")
    }
}