"use strict";
class Explosion {
    constructor() {
        this.explosion = document.createElement("bomb");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.explosion);
    }
    flipped() {
        this.explosion.style.transform = `scaleX(-1)`;
        this.explosion.style.left = `15%`;
    }
    flippedBack() {
        this.explosion.style.transform = `scaleX(1)`;
        this.explosion.style.left = `60%`;
    }
    explode() {
        this.explosion.style.display = "block";
        this.explosion.style.visibility = "visible";
    }
    stopExplode() {
        this.explosion.style.display = "none";
        this.explosion.style.visibility = "hidden";
    }
}
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
        let x = ((window.innerWidth * 0.5) - (this.frog.clientWidth / 2));
        let y = 0;
        this.frog.style.transform = `translate(${x}px, ${y}px) scale(0.3)`;
    }
    onFrogClick(e) {
        console.log(e.keyCode);
        let tipnmr = Math.floor(Math.random() * 5);
        switch (e.keyCode) {
            case this.keyinfo:
                this.frog.classList.add("talk" + tipnmr);
                setTimeout(() => {
                    this.talking();
                }, 3500);
        }
    }
    talking() {
        this.frog.setAttribute("class", "");
    }
}
class Game {
    constructor() {
        this.lifehearts = [];
        this.lifehearts2 = [];
        console.log("Game was created!");
        let first = Math.floor(Math.random() * 6);
        let second = Math.floor(Math.random() * 6);
        let third = Math.floor(Math.random() * 6);
        let fourth = Math.floor(Math.random() * 6);
        this.leftArrows = new Leftarrows(first, second, third, fourth);
        this.rightArrows = new Rightarrows(first, second, third, fourth);
        this.unicorn = new Unicorn(0);
        this.unicorn2 = new Unicorn(2);
        this.frog = new Frog();
        this.lifehearts.push(new Lifeheart(50));
        this.lifehearts.push(new Lifeheart(150));
        this.lifehearts.push(new Lifeheart(250));
        this.lifehearts2.push(new Lifeheart(1200));
        this.lifehearts2.push(new Lifeheart(1300));
        this.lifehearts2.push(new Lifeheart(1400));
        this.gameloop();
    }
    gameloop() {
        this.unicorn.update();
        this.unicorn2.update2();
        this.frog.updateFrog();
        for (const heart of this.lifehearts) {
            heart.lifeupdate();
        }
        for (const heart2 of this.lifehearts2) {
            heart2.lifeupdate();
        }
        if ((this.leftArrows._win == 1) || (this.rightArrows._win == 1)) {
            if (this.leftArrows._win == 1) {
                this.leftArrows._win = 0;
                this.unicorn._win = 1;
                console.log("winLeft");
                this.rightArrows.delete();
                this.lifehearts;
            }
            if (this.rightArrows._win == 1) {
                this.rightArrows._win = 0;
                this.unicorn2._win = 1;
                console.log("winRight");
                this.leftArrows.delete();
            }
        }
        requestAnimationFrame(() => this.gameloop());
    }
}
window.addEventListener("load", () => new Game());
class Leftarrows {
    constructor(_x_1, _x_2, _x_3, _x_4) {
        this.win = 0;
        this._x_1 = 0;
        this._x_2 = 0;
        this._x_3 = 0;
        this._x_4 = 0;
        this._scale = 0;
        console.log("de nummers zijn", _x_1, _x_2, _x_3, _x_4);
        this._x_1 = _x_1;
        this._x_2 = _x_2;
        this._x_3 = _x_3;
        this._x_4 = _x_4;
        this._scale = 0.7;
        this.game = document.getElementsByTagName("game")[0];
        this.createleftarrow_1();
        this.createleftarrow_2();
        this.createleftarrow_3();
        this.createleftarrow_4();
        window.addEventListener("keydown", (e) => this.keypressleft_1(e));
    }
    get _win() { return this.win; }
    set _win(A) { this.win = A; }
    get x_1() { return this._x_1; }
    get x_2() { return this._x_2; }
    get x_3() { return this._x_3; }
    get x_4() { return this._x_4; }
    get scale() { return this._scale; }
    createleftarrow_1() {
        this.leftarrow_1 = document.createElement("leftarrow_1");
        this.game.appendChild(this.leftarrow_1);
        if (this._x_1 == 0) {
            this.leftarrow_1.classList.add("leftup");
        }
        else if (this._x_1 == 1) {
            this.leftarrow_1.classList.add("up");
        }
        else if (this._x_1 == 2) {
            this.leftarrow_1.classList.add("rightup");
        }
        else if (this._x_1 == 3) {
            this.leftarrow_1.classList.add("leftdown");
        }
        else if (this._x_1 == 4) {
            this.leftarrow_1.classList.add("down");
        }
        else if (this._x_1 == 5) {
            this.leftarrow_1.classList.add("rightdown");
        }
        let x = ((window.innerWidth * 0.025));
        let y = ((window.innerHeight * 0.2) - (this.leftarrow_1.clientHeight * this._scale / 2));
        this.leftarrow_1.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`;
    }
    createleftarrow_2() {
        this.leftarrow_2 = document.createElement("leftarrow_2");
        this.game.appendChild(this.leftarrow_2);
        if (this._x_2 == 0) {
            this.leftarrow_2.classList.add("leftup");
        }
        else if (this._x_2 == 1) {
            this.leftarrow_2.classList.add("up");
        }
        else if (this._x_2 == 2) {
            this.leftarrow_2.classList.add("rightup");
        }
        else if (this._x_2 == 3) {
            this.leftarrow_2.classList.add("leftdown");
        }
        else if (this._x_2 == 4) {
            this.leftarrow_2.classList.add("down");
        }
        else if (this._x_2 == 5) {
            this.leftarrow_2.classList.add("rightdown");
        }
        let x = ((window.innerWidth * 0.025) + this.leftarrow_2.clientWidth * this._scale);
        let y = ((window.innerHeight * 0.2) - (this.leftarrow_2.clientHeight * this._scale / 2));
        this.leftarrow_2.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`;
    }
    createleftarrow_3() {
        this.leftarrow_3 = document.createElement("leftarrow_3");
        this.game.appendChild(this.leftarrow_3);
        if (this._x_3 == 0) {
            this.leftarrow_3.classList.add("leftup");
        }
        else if (this._x_3 == 1) {
            this.leftarrow_3.classList.add("up");
        }
        else if (this._x_3 == 2) {
            this.leftarrow_3.classList.add("rightup");
        }
        else if (this._x_3 == 3) {
            this.leftarrow_3.classList.add("leftdown");
        }
        else if (this._x_3 == 4) {
            this.leftarrow_3.classList.add("down");
        }
        else if (this._x_3 == 5) {
            this.leftarrow_3.classList.add("rightdown");
        }
        let x = ((window.innerWidth * 0.025) + (this.leftarrow_3.clientWidth * this._scale * 2));
        let y = ((window.innerHeight * 0.2) - (this.leftarrow_3.clientHeight * this._scale / 2));
        this.leftarrow_3.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`;
    }
    createleftarrow_4() {
        this.leftarrow_4 = document.createElement("leftarrow_4");
        this.game.appendChild(this.leftarrow_4);
        if (this._x_4 == 0) {
            this.leftarrow_4.classList.add("leftup");
        }
        else if (this._x_4 == 1) {
            this.leftarrow_4.classList.add("up");
        }
        else if (this._x_4 == 2) {
            this.leftarrow_4.classList.add("rightup");
        }
        else if (this._x_4 == 3) {
            this.leftarrow_4.classList.add("leftdown");
        }
        else if (this._x_4 == 4) {
            this.leftarrow_4.classList.add("down");
        }
        else if (this._x_4 == 5) {
            this.leftarrow_4.classList.add("rightdown");
        }
        let x = ((window.innerWidth * 0.025) + (this.leftarrow_4.clientWidth * this._scale * 3));
        let y = ((window.innerHeight * 0.2) - (this.leftarrow_4.clientHeight * this._scale / 2));
        this.leftarrow_4.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`;
    }
    keypressleft_1(event) {
        switch (event.keyCode) {
            case 82:
                if (this._x_1 == 0) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
            case 84:
                if (this._x_1 == 1) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
            case 89:
                if (this._x_1 == 2) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
            case 70:
                if (this._x_1 == 3) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
            case 71:
                if (this._x_1 == 4) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
            case 72:
                if (this._x_1 == 5) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
        }
    }
    keypressleft_2(event) {
        switch (event.keyCode) {
            case 82:
                if (this._x_2 == 0) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
            case 84:
                if (this._x_2 == 1) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
            case 89:
                if (this._x_2 == 2) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
            case 70:
                if (this._x_2 == 3) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
            case 71:
                if (this._x_2 == 4) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
            case 72:
                if (this._x_2 == 5) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
        }
    }
    keypressleft_3(event) {
        switch (event.keyCode) {
            case 82:
                if (this._x_3 == 0) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
            case 84:
                if (this._x_3 == 1) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
            case 89:
                if (this._x_3 == 2) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
            case 70:
                if (this._x_3 == 3) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
            case 71:
                if (this._x_3 == 4) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
            case 72:
                if (this._x_3 == 5) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
        }
    }
    keypressleft_4(event) {
        switch (event.keyCode) {
            case 82:
                if (this._x_4 == 0) {
                    this.leftarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 84:
                if (this._x_4 == 1) {
                    this.leftarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 89:
                if (this._x_4 == 2) {
                    this.leftarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 70:
                if (this._x_4 == 3) {
                    this.leftarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 71:
                if (this._x_4 == 4) {
                    this.leftarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 72:
                if (this._x_4 == 5) {
                    this.leftarrow_4.remove();
                    this.win = 1;
                }
                break;
        }
    }
    delete() {
        this.leftarrow_1.remove();
        this.leftarrow_2.remove();
        this.leftarrow_3.remove();
        this.leftarrow_4.remove();
    }
}
class Lifeheart {
    constructor(x) {
        this.lifeheart = document.createElement("lifeheart");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.lifeheart);
        this.y = -60;
        this.x = x;
    }
    lifeupdate() {
        this.lifeheart.style.transform = `translate(${this.x}px, ${this.y}px) scale(0.3)`;
        console.log(this.x);
        console.log(this.y);
    }
}
class Rightarrows {
    constructor(_x_1, _x_2, _x_3, _x_4) {
        this.win = 0;
        this._x_1 = 0;
        this._x_2 = 0;
        this._x_3 = 0;
        this._x_4 = 0;
        this._scale = 0;
        console.log("de nummers zijn", _x_1, _x_2, _x_3, _x_4);
        this._x_1 = _x_1;
        this._x_2 = _x_2;
        this._x_3 = _x_3;
        this._x_4 = _x_4;
        this._scale = 0.7;
        this.game = document.getElementsByTagName("game")[0];
        this.createrightarrow_1();
        this.createrightarrow_2();
        this.createrightarrow_3();
        this.createrightarrow_4();
        window.addEventListener("keydown", (e) => this.keypressright_1(e));
    }
    get _win() { return this.win; }
    set _win(A) { this.win = A; }
    get x_1() { return this._x_1; }
    get x_2() { return this._x_2; }
    get x_3() { return this._x_3; }
    get x_4() { return this._x_4; }
    get scale() { return this._scale; }
    createrightarrow_1() {
        this.rightarrow_1 = document.createElement("rightarrow_1");
        this.game.appendChild(this.rightarrow_1);
        if (this._x_1 == 0) {
            this.rightarrow_1.classList.add("leftup");
        }
        else if (this._x_1 == 1) {
            this.rightarrow_1.classList.add("up");
        }
        else if (this._x_1 == 2) {
            this.rightarrow_1.classList.add("rightup");
        }
        else if (this._x_1 == 3) {
            this.rightarrow_1.classList.add("leftdown");
        }
        else if (this._x_1 == 4) {
            this.rightarrow_1.classList.add("down");
        }
        else if (this._x_1 == 5) {
            this.rightarrow_1.classList.add("rightdown");
        }
        let x = ((window.innerWidth * 0.975) - this.rightarrow_1.clientWidth * this._scale * 4);
        let y = ((window.innerHeight * 0.2) - (this.rightarrow_1.clientWidth * this._scale / 2));
        this.rightarrow_1.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`;
    }
    createrightarrow_2() {
        this.rightarrow_2 = document.createElement("rightarrow_2");
        this.game.appendChild(this.rightarrow_2);
        if (this._x_2 == 0) {
            this.rightarrow_2.classList.add("leftup");
        }
        else if (this._x_2 == 1) {
            this.rightarrow_2.classList.add("up");
        }
        else if (this._x_2 == 2) {
            this.rightarrow_2.classList.add("rightup");
        }
        else if (this._x_2 == 3) {
            this.rightarrow_2.classList.add("leftdown");
        }
        else if (this._x_2 == 4) {
            this.rightarrow_2.classList.add("down");
        }
        else if (this._x_2 == 5) {
            this.rightarrow_2.classList.add("rightdown");
        }
        let x = ((window.innerWidth * 0.975) - this.rightarrow_2.clientWidth * this._scale * 3);
        let y = ((window.innerHeight * 0.2) - (this.rightarrow_2.clientWidth * this._scale / 2));
        this.rightarrow_2.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`;
    }
    createrightarrow_3() {
        this.rightarrow_3 = document.createElement("rightarrow_3");
        this.game.appendChild(this.rightarrow_3);
        if (this._x_3 == 0) {
            this.rightarrow_3.classList.add("leftup");
        }
        else if (this._x_3 == 1) {
            this.rightarrow_3.classList.add("up");
        }
        else if (this._x_3 == 2) {
            this.rightarrow_3.classList.add("rightup");
        }
        else if (this._x_3 == 3) {
            this.rightarrow_3.classList.add("leftdown");
        }
        else if (this._x_3 == 4) {
            this.rightarrow_3.classList.add("down");
        }
        else if (this._x_3 == 5) {
            this.rightarrow_3.classList.add("rightdown");
        }
        let x = ((window.innerWidth * 0.975) - this.rightarrow_3.clientWidth * this._scale * 2);
        let y = ((window.innerHeight * 0.2) - (this.rightarrow_3.clientWidth * this._scale / 2));
        this.rightarrow_3.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`;
    }
    createrightarrow_4() {
        this.rightarrow_4 = document.createElement("rightarrow_4");
        this.game.appendChild(this.rightarrow_4);
        if (this._x_4 == 0) {
            this.rightarrow_4.classList.add("leftup");
        }
        else if (this._x_4 == 1) {
            this.rightarrow_4.classList.add("up");
        }
        else if (this._x_4 == 2) {
            this.rightarrow_4.classList.add("rightup");
        }
        else if (this._x_4 == 3) {
            this.rightarrow_4.classList.add("leftdown");
        }
        else if (this._x_4 == 4) {
            this.rightarrow_4.classList.add("down");
        }
        else if (this._x_4 == 5) {
            this.rightarrow_4.classList.add("rightdown");
        }
        let x = ((window.innerWidth * 0.975) - this.rightarrow_1.clientWidth * this._scale);
        let y = ((window.innerHeight * 0.2) - (this.rightarrow_4.clientWidth * this._scale / 2));
        this.rightarrow_4.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`;
    }
    keypressright_1(event) {
        switch (event.keyCode) {
            case 74:
                if (this._x_1 == 0) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
            case 75:
                if (this._x_1 == 1) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
            case 76:
                if (this._x_1 == 2) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
            case 78:
                if (this._x_1 == 3) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
            case 77:
                if (this._x_1 == 4) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
            case 188:
                if (this._x_1 == 5) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
        }
    }
    keypressright_2(event) {
        switch (event.keyCode) {
            case 74:
                if (this._x_2 == 0) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
            case 75:
                if (this._x_2 == 1) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
            case 76:
                if (this._x_2 == 2) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
            case 78:
                if (this._x_2 == 3) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
            case 77:
                if (this._x_2 == 4) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
            case 188:
                if (this._x_2 == 5) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
        }
    }
    keypressright_3(event) {
        switch (event.keyCode) {
            case 74:
                if (this._x_3 == 0) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
            case 75:
                if (this._x_3 == 1) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
            case 76:
                if (this._x_3 == 2) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
            case 78:
                if (this._x_3 == 3) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
            case 77:
                if (this._x_3 == 4) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
            case 188:
                if (this._x_3 == 5) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
        }
    }
    keypressright_4(event) {
        switch (event.keyCode) {
            case 74:
                if (this._x_4 == 0) {
                    this.rightarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 75:
                if (this._x_4 == 1) {
                    this.rightarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 76:
                if (this._x_4 == 2) {
                    this.rightarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 78:
                if (this._x_4 == 3) {
                    this.rightarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 77:
                if (this._x_4 == 4) {
                    this.rightarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 188:
                if (this._x_4 == 5) {
                    this.rightarrow_4.remove();
                    this.win = 1;
                }
                break;
        }
    }
    delete() {
        this.rightarrow_1.remove();
        this.rightarrow_2.remove();
        this.rightarrow_3.remove();
        this.rightarrow_4.remove();
    }
}
class Unicorn {
    constructor(x) {
        this.x = 0;
        this.rightSpeed = 10;
        this.leftSpeed = 10;
        this.attackBack = false;
        this.explosion = new Explosion;
        this.win = 0;
        this.win2 = 0;
        this.unicorn = document.createElement("unicorn");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.unicorn);
        if (x != 0) {
            x = window.innerWidth - this.unicorn.clientWidth;
        }
        this.x = x;
        this.y = 500;
    }
    get _win() { return this.win; }
    set _win(A) { this.win = A; }
    get _win2() { return this.win2; }
    set _win2(A) { this.win2 = A; }
    moveUnicorns() {
    }
    update() {
        this.attackMove();
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    update2() {
        this.attackMove2();
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(-1)`;
    }
    getRectangle() {
        return this.unicorn.getBoundingClientRect();
    }
    bounceX() {
        this.rightSpeed = -1;
        this.unicorn.classList.remove("run");
        setTimeout(() => {
            this.rightSpeed = 0;
        }, 300);
    }
    attackMove() {
        if ((this.x <= 403) && (this.win == 1)) {
            console.log("hij doet het update 1");
            this.unicorn.classList.add("run");
            this.x += 4;
        }
        if ((this.x > 400) && (this.attackBack == false)) {
            console.log("hij werkt nu wel");
            this.unicorn.classList.remove("run");
            this.win = 0;
            this.explosion.flippedBack();
            this.attackAnimation();
        }
        if (this.attackBack == true) {
            this.x -= 4;
        }
        if ((this.x < 0) && (this.attackBack == true)) {
            this.x = 0;
            this.unicorn.classList.remove("run");
        }
    }
    attackMove2() {
        if ((this.x >= 1000) && (this.win == 1)) {
            console.log("hij doet het update 2");
            this.unicorn.classList.add("run");
            this.x -= 4;
        }
        if ((this.x < 1000) && (this.attackBack == false)) {
            console.log("hij werkt nu wel 2");
            this.unicorn.classList.remove("run");
            this.win = 0;
            this.explosion.flipped();
            this.attackAnimation();
        }
        if (this.attackBack == true) {
            this.x += 4;
        }
        if ((this.x > window.innerWidth - this.unicorn.clientWidth) && (this.attackBack == true)) {
            this.x = window.innerWidth - this.unicorn.clientWidth;
            this.unicorn.classList.remove("run");
        }
    }
    attackAnimation() {
        console.log("doe attack animation");
        this.explosion.explode();
        setTimeout(() => {
            this.attackBack = true;
            this.unicorn.classList.add("run");
            this.explosion.stopExplode();
            console.log("hoi = true");
        }, 2000);
    }
}
//# sourceMappingURL=main.js.map