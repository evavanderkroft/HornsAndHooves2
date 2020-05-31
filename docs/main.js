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
        console.log("Game was created!");
        let first = Math.floor(Math.random() * 6);
        let second = Math.floor(Math.random() * 6);
        let third = Math.floor(Math.random() * 6);
        let fourth = Math.floor(Math.random() * 6);
        new Leftarrows(first, second, third, fourth);
        new Rightarrows(first, second, third, fourth);
        this.unicorn = new Unicorn(0, 68, 65);
        this.unicorn2 = new Unicorn(2, 37, 39);
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
class Leftarrows {
    constructor(_x_1, _x_2, _x_3, _x_4) {
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
                }
                break;
            case 84:
                if (this._x_4 == 1) {
                    this.leftarrow_4.remove();
                }
                break;
            case 89:
                if (this._x_4 == 2) {
                    this.leftarrow_4.remove();
                }
                break;
            case 70:
                if (this._x_4 == 3) {
                    this.leftarrow_4.remove();
                }
                break;
            case 71:
                if (this._x_4 == 4) {
                    this.leftarrow_4.remove();
                }
                break;
            case 72:
                if (this._x_4 == 5) {
                    this.leftarrow_4.remove();
                }
                break;
        }
    }
}
class Rightarrows {
    constructor(_x_1, _x_2, _x_3, _x_4) {
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
                }
                break;
            case 75:
                if (this._x_4 == 1) {
                    this.rightarrow_4.remove();
                }
                break;
            case 76:
                if (this._x_4 == 2) {
                    this.rightarrow_4.remove();
                }
                break;
            case 78:
                if (this._x_4 == 3) {
                    this.rightarrow_4.remove();
                }
                break;
            case 77:
                if (this._x_4 == 4) {
                    this.rightarrow_4.remove();
                }
                break;
            case 188:
                if (this._x_4 == 5) {
                    this.rightarrow_4.remove();
                }
                break;
        }
    }
}
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
}
//# sourceMappingURL=main.js.map