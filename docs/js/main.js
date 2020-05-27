"use strict";
class Frog {
    constructor() {
        this.frog = document.createElement("frog");
        console.log("Frog was created!");
        this.keyinfo = 73;
        window.addEventListener("keydown", (e) => this.onFrogClick(e));
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.frog);
    }
    updateFrog() {
        this.frog.style.transform = `translate(500px, 10px) scale(0.3)`;
    }
    onFrogClick(e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.keyinfo:
                this.frog.classList.add("talk");
                setTimeout(() => {
                    this.talking();
                }, 3000);
        }
    }
    talking() {
        this.frog.classList.remove("talk");
    }
}
class Game {
    constructor() {
        console.log("Game was created!");
        this.unicorn = new Unicorn();
        this.unicorn2 = new Unicorn2();
        this.frog = new Frog();
        this.gameloop();
    }
    gameloop() {
        this.unicorn.update();
        this.unicorn2.update2();
        this.frog.updateFrog();
        requestAnimationFrame(() => this.gameloop());
    }
}
window.addEventListener("load", () => new Game());
class Unicorn {
    constructor() {
        this.rightSpeed = 0;
        this.leftSpeed = 0;
        this.unicorn = document.createElement("unicorn");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.unicorn);
        this.rightkey = 68;
        this.leftkey = 65;
        this.x = 0;
        this.y = 400;
        window.addEventListener("keydown", (e) => this.moveUnicorn(e));
    }
    moveUnicorn(e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.rightkey:
                this.rightSpeed = 5;
                setTimeout(() => {
                    this.rightSpeed = 0;
                }, 1000);
                break;
            case this.leftkey:
                this.leftSpeed = 5;
                setTimeout(() => {
                    this.leftSpeed = 0;
                }, 1000);
        }
    }
    update() {
        this.x += this.rightSpeed;
        this.x -= this.leftSpeed;
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
class Unicorn2 {
    constructor() {
        this.rightSpeed = 0;
        this.leftSpeed = 0;
        this.unicorn2 = document.createElement("unicorn2");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.unicorn2);
        this.leftkey = 39;
        this.rightkey = 37;
        this.x = window.innerWidth - this.unicorn2.clientWidth;
        this.y = 400;
        window.addEventListener("keydown", (e) => this.moveUnicorn(e));
    }
    moveUnicorn(e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.rightkey:
                this.rightSpeed = 5;
                setTimeout(() => {
                    this.rightSpeed = 0;
                }, 1000);
                break;
            case this.leftkey:
                this.leftSpeed = 5;
                setTimeout(() => {
                    this.leftSpeed = 0;
                }, 1000);
        }
    }
    update2() {
        this.x -= this.rightSpeed;
        this.x += this.leftSpeed;
        this.unicorn2.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=main.js.map