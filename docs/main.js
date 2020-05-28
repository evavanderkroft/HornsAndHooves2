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
        this.frog.style.transform = `translate(500px, 0px) scale(0.3)`;
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
        this.score = 10;
        this.score2 = 10;
        console.log("Game was created!");
        this.unicorn = new Unicorn(0, 68, 65);
        this.unicorn2 = new Unicorn(2, 37, 39);
        this.frog = new Frog();
        this.gameloop();
    }
    gameloop() {
        this.unicorn.update();
        this.unicorn2.update2();
        this.frog.updateFrog();
        if (this.checkCollision(this.unicorn.getRectangle(), this.unicorn2.getRectangle())) {
            console.log("Attack p1");
            this.removePoint(1);
            this.unicorn2.bounceX();
        }
        if (this.checkCollision(this.unicorn.getRectangle(), this.unicorn2.getRectangle())) {
            console.log("Attack p2");
            this.removePoint(2);
            this.unicorn.bounceX();
        }
        if (this.score <= 1) {
            this.score = 10;
            this.score2 = 10;
            console.log("player 2 won!");
        }
        if (this.score2 <= 1) {
            this.score = 10;
            this.score2 = 10;
            console.log("player 1 won!");
        }
        requestAnimationFrame(() => this.gameloop());
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
    removePoint(player) {
        if (player == 1) {
            let score = document.getElementsByTagName("score")[0];
            this.score--;
            score.innerHTML = "Score: " + this.score;
        }
        else {
            let score = document.getElementsByTagName("score")[1];
            this.score2--;
            score.innerHTML = "Score: " + this.score2;
        }
    }
}
window.addEventListener("load", () => new Game());
class Unicorn {
    constructor(x, rightKey, leftKey) {
        this.rightSpeed = 0;
        this.leftSpeed = 0;
        this.unicorn = document.createElement("unicorn");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.unicorn);
        this.rightkey = rightKey;
        this.leftkey = leftKey;
        if (x != 0) {
            x = window.innerWidth - this.unicorn.clientWidth;
        }
        this.x = x;
        this.y = 400;
        window.addEventListener("keydown", (e) => this.moveUnicorn(e));
    }
    moveUnicorn(e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.rightkey:
                this.unicorn.classList.add("run");
                this.rightSpeed = 5;
                setTimeout(() => {
                    this.rightSpeed = 0;
                    this.running();
                }, 1000);
                break;
            case this.leftkey:
                this.unicorn.classList.add("run");
                this.leftSpeed = 5;
                setTimeout(() => {
                    this.leftSpeed = 0;
                    this.running();
                }, 1000);
        }
    }
    update() {
        this.x += this.rightSpeed;
        this.x -= this.leftSpeed;
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    update2() {
        this.x -= this.rightSpeed;
        this.x += this.leftSpeed;
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(-1)`;
    }
    running() {
        this.unicorn.classList.remove("run");
    }
    getRectangle() {
        return this.unicorn.getBoundingClientRect();
    }
    bounceX() {
        this.rightSpeed = -1;
        this.running();
        setTimeout(() => {
            this.rightSpeed = 0;
        }, 300);
    }
}
//# sourceMappingURL=main.js.map