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
class Control {
    constructor() {
        this._player1 = "";
        this._player2 = "";
        this._background = "";
        this.createselectpage();
        this.gameLoop();
        this.themeSong = new Audio('audio/ThemeSong.mp3');
        this.themeSong.play();
        this.themeSong.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        requestAnimationFrame(() => this.gameLoop());
    }
    get player1() { return this._player1; }
    get player2() { return this._player2; }
    get background() { return this._background; }
    createselectpage() {
        this.createselect = document.createElement("selectcharacter");
        let control = document.getElementsByTagName("control")[0];
        control.appendChild(this.createselect);
        this.selectcharacter = new Selectcharacter();
    }
    createstorypage() {
        this.createstory = document.createElement("story");
        let control = document.getElementsByTagName("control")[0];
        control.appendChild(this.createstory);
        this.story = new Story(this.player1, this.player2);
    }
    creategamepage() {
        this.creategame = document.createElement("game");
        let control = document.getElementsByTagName("control")[0];
        control.appendChild(this.creategame);
        this.game = new Game(this.player1, this.player2, this._background);
    }
    createwinnerpage(winner) {
        this.createwinner = document.createElement("winner");
        let control = document.getElementsByTagName("control")[0];
        control.appendChild(this.createwinner);
        this.winner = new Winner(winner);
    }
    gameLoop() {
        if (this.selectcharacter != null &&
            this.selectcharacter.next == true) {
            console.log("story");
            this._player1 = this.selectcharacter.horse1;
            this._player2 = this.selectcharacter.horse2;
            console.log(this._player1, this._player2);
            this.createstorypage();
            this.selectcharacter = undefined;
            document.getElementsByTagName('selectcharacter')[0].remove();
        }
        if (this.story != null &&
            this.story.next == true) {
            this._background = this.story.background;
            this.creategamepage();
            this.story = undefined;
            document.getElementsByTagName('story')[0].remove();
        }
        if (this.game != null &&
            this.game.next == true) {
            this.themeSong.pause();
            this.createwinnerpage(this.game.winner);
            let winnersound = new Audio('audio/winner.mp3');
            winnersound.play();
            this.game = undefined;
            document.getElementsByTagName('game')[0].remove();
        }
        if (this.winner != null &&
            this.winner.next == true) {
            this.createselectpage();
            this.themeSong.play();
            this.winner = undefined;
            document.getElementsByTagName('winner')[0].remove();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
}
window.addEventListener("load", () => new Control());
class Frog {
    constructor() {
        this.frog = document.createElement("frog");
        console.log("Frog was created!");
        this.keyinfo = 32;
        window.addEventListener("keyup", (e) => this.onFrogClick(e));
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.frog);
    }
    updateFrog() {
        let x = ((window.innerWidth * 0.5) - (this.frog.clientWidth / 2));
        let y = window.innerHeight - 915;
        this.frog.style.transform = `translate(${x}px, ${y}px) scale(0.3)`;
    }
    onFrogClick(e) {
        console.log(e.keyCode);
        let tipnmr = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        let kikkergeluid = new Audio('audio/kikker.mp3');
        switch (e.keyCode) {
            case this.keyinfo:
                this.frog.classList.add("talk" + tipnmr);
                kikkergeluid.play();
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
    constructor(player1, player2, background) {
        this.lifehearts = [];
        this.lifehearts2 = [];
        this.winLeft = 0;
        this.WinRight = 0;
        this.specialdone1 = 0;
        this.specialdone2 = 0;
        this.bezig = 0;
        this._next = false;
        this._player1 = "";
        this._player2 = "";
        this._winner = "";
        window.addEventListener("keyup", (e) => this.specialAttack(e));
        this._player1 = player1;
        this._player2 = player2;
        this.createbackground(background);
        console.log(player1, player2);
        console.log("Game was created!");
        this.unicorn = new Unicorn(0, player1);
        this.unicorn2 = new Unicorn(2, player2);
        this.frog = new Frog();
        this.specialdone1 = 0;
        this.specialdone2 = 0;
        this.bezig = 0;
        this.newGame();
        this.gameloop();
    }
    get next() { return this._next; }
    get player1() { return this._player1; }
    get player2() { return this._player2; }
    get winner() { return this._winner; }
    createbackground(background) {
        this.background = document.createElement("background");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.background);
        this.background.style.backgroundImage = `url(../img/${background}.jpg)`;
    }
    newGame() {
        console.log("game is gecreerd in new game");
        if ((this.lifehearts.length == 0) && (this.lifehearts2.length == 0)) {
            this.lifehearts.push(new Lifeheart(-50));
            this.lifehearts.push(new Lifeheart(50));
            this.lifehearts.push(new Lifeheart(150));
            this.lifehearts.push(new Lifeheart(250));
            this.lifehearts.push(new Lifeheart(350));
            this.lifehearts2.push(new Lifeheart(1100));
            this.lifehearts2.push(new Lifeheart(1200));
            this.lifehearts2.push(new Lifeheart(1300));
            this.lifehearts2.push(new Lifeheart(1400));
            this.lifehearts2.push(new Lifeheart(1500));
            this.addArrows();
        }
        if (this.winLeft == 1) {
            let lifeHeart = this.lifehearts2.shift();
            lifeHeart.delete();
            this.winLeft = 0;
            this.addArrows();
            console.log("leftArrows.win");
        }
        if (this.WinRight == 1) {
            let lifeHeart2 = this.lifehearts.pop();
            lifeHeart2.delete();
            this.WinRight = 0;
            this.addArrows();
            console.log("rightArrows.win");
        }
    }
    addArrows() {
        let first = Math.floor(Math.random() * 6);
        let second = Math.floor(Math.random() * 6);
        let third = Math.floor(Math.random() * 6);
        let fourth = Math.floor(Math.random() * 6);
        this.leftArrows = new Leftarrows(first, second, third, fourth);
        this.rightArrows = new Rightarrows(first, second, third, fourth);
    }
    specialAttack(e) {
        switch (e.keyCode) {
            case 67:
                if (this.specialdone1 == 1) {
                    console.log("special attack is al gebruikt");
                }
                else if (this.bezig == 1) {
                    console.log("1 special attack tegelijk mogelijk");
                }
                else {
                    this.bezig = 1;
                    let soundspecial = new Audio('audio/specialattack.mp3');
                    soundspecial.play();
                    this.unicorn.specialattackplayer1();
                    this.rightArrows.delete();
                    this.leftArrows.delete();
                    setTimeout(() => {
                        this.addArrows();
                        window.removeEventListener("keydown", (e) => this.specialAttack(e), true);
                        if (this.lifehearts2.length <= 2) {
                            this._next = true;
                            this._winner = this._player1;
                            console.log(this.winner);
                        }
                        else {
                            let lifeHeart = this.lifehearts2.shift();
                            lifeHeart.delete();
                            let lifeheart2 = this.lifehearts2.shift();
                            lifeheart2.delete();
                        }
                        this.specialdone1 = 1;
                        this.bezig = 0;
                    }, 3000);
                }
                break;
            case 78:
                if (this.specialdone2 == 1) {
                    console.log("special attack is al gebruikt");
                }
                else if (this.bezig == 1) {
                    console.log("1 special attack tegelijk mogelijk");
                }
                else {
                    this.bezig = 1;
                    let soundspecial2 = new Audio('audio/specialattack.mp3');
                    soundspecial2.play();
                    this.unicorn2.specialattackplayer2();
                    this.rightArrows.delete();
                    this.leftArrows.delete();
                    setTimeout(() => {
                        this.addArrows();
                        if (this.lifehearts.length <= 2) {
                            this._next = true;
                            this._winner = this._player2;
                            console.log(this.winner);
                        }
                        else {
                            let lifeHeart = this.lifehearts.shift();
                            lifeHeart.delete();
                            let lifeheart2 = this.lifehearts.shift();
                            lifeheart2.delete();
                        }
                        this.specialdone2 = 1;
                        this.bezig = 0;
                    }, 3000);
                }
        }
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
        if (this.lifehearts.length == 0) {
            this._next = true;
            this._winner = this._player2;
            console.log(this.winner);
        }
        if (this.lifehearts2.length == 0) {
            this._next = true;
            this._winner = this._player1;
            console.log(this.winner);
        }
        if ((this.leftArrows._win == 1) || (this.rightArrows._win == 1)) {
            console.log("winLeft");
            if (this.leftArrows._win == 1 && this.bezig == 0) {
                this.bezig = 1;
                this.winLeft = 1;
                this.leftArrows._win = 0;
                this.unicorn._win = 1;
                this.rightArrows.delete();
                this.leftArrows.delete();
                setTimeout(() => {
                    this.newGame();
                    this.bezig = 0;
                }, 6000);
            }
            if (this.rightArrows._win == 1 && this.bezig == 0) {
                this.bezig = 1;
                this.rightArrows._win = 0;
                this.unicorn2._win = 1;
                this.WinRight = 1;
                console.log("winRight");
                this.leftArrows.delete();
                setTimeout(() => {
                    this.newGame();
                    this.bezig = 0;
                }, 4500);
            }
        }
        requestAnimationFrame(() => this.gameloop());
    }
}
class Leftarrows {
    constructor(_x_1, _x_2, _x_3, _x_4) {
        this.win = 0;
        this._x_1 = 0;
        this._x_2 = 0;
        this._x_3 = 0;
        this._x_4 = 0;
        this._scale = 0;
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
            case 81:
                if (this._x_1 == 0) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
            case 87:
                if (this._x_1 == 1) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
            case 69:
                if (this._x_1 == 2) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
            case 65:
                if (this._x_1 == 3) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
            case 83:
                if (this._x_1 == 4) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
            case 68:
                if (this._x_1 == 5) {
                    this.leftarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_2(e));
                }
                break;
        }
    }
    keypressleft_2(event) {
        switch (event.keyCode) {
            case 81:
                if (this._x_2 == 0) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
            case 87:
                if (this._x_2 == 1) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
            case 69:
                if (this._x_2 == 2) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
            case 65:
                if (this._x_2 == 3) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
            case 83:
                if (this._x_2 == 4) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
            case 68:
                if (this._x_2 == 5) {
                    this.leftarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_3(e));
                }
                break;
        }
    }
    keypressleft_3(event) {
        switch (event.keyCode) {
            case 81:
                if (this._x_3 == 0) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
            case 87:
                if (this._x_3 == 1) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
            case 69:
                if (this._x_3 == 2) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
            case 65:
                if (this._x_3 == 3) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
            case 83:
                if (this._x_3 == 4) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
            case 68:
                if (this._x_3 == 5) {
                    this.leftarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressleft_4(e));
                }
                break;
        }
    }
    keypressleft_4(event) {
        switch (event.keyCode) {
            case 81:
                if (this._x_4 == 0) {
                    this.leftarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 87:
                if (this._x_4 == 1) {
                    this.leftarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 69:
                if (this._x_4 == 2) {
                    this.leftarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 65:
                if (this._x_4 == 3) {
                    this.leftarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 83:
                if (this._x_4 == 4) {
                    this.leftarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 68:
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
    }
    delete() {
        this.lifeheart.remove();
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
        let x = ((window.innerWidth * 0.973) - this.rightarrow_1.clientWidth * this._scale * 4);
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
        let x = ((window.innerWidth * 0.973) - this.rightarrow_2.clientWidth * this._scale * 3);
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
        let x = ((window.innerWidth * 0.973) - this.rightarrow_3.clientWidth * this._scale * 2);
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
        let x = ((window.innerWidth * 0.973) - this.rightarrow_1.clientWidth * this._scale);
        let y = ((window.innerHeight * 0.2) - (this.rightarrow_4.clientWidth * this._scale / 2));
        this.rightarrow_4.style.transform = `translate(${x}px, ${y}px) scale(${this._scale})`;
    }
    keypressright_1(event) {
        switch (event.keyCode) {
            case 85:
                if (this._x_1 == 0) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
            case 73:
                if (this._x_1 == 1) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
            case 79:
                if (this._x_1 == 2) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
            case 74:
                if (this._x_1 == 3) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
            case 75:
                if (this._x_1 == 4) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
            case 76:
                if (this._x_1 == 5) {
                    this.rightarrow_1.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_2(e));
                }
                break;
        }
    }
    keypressright_2(event) {
        switch (event.keyCode) {
            case 85:
                if (this._x_2 == 0) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
            case 73:
                if (this._x_2 == 1) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
            case 79:
                if (this._x_2 == 2) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
            case 74:
                if (this._x_2 == 3) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
            case 75:
                if (this._x_2 == 4) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
            case 76:
                if (this._x_2 == 5) {
                    this.rightarrow_2.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_3(e));
                }
                break;
        }
    }
    keypressright_3(event) {
        switch (event.keyCode) {
            case 85:
                if (this._x_3 == 0) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
            case 73:
                if (this._x_3 == 1) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
            case 79:
                if (this._x_3 == 2) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
            case 74:
                if (this._x_3 == 3) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
            case 75:
                if (this._x_3 == 4) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
            case 76:
                if (this._x_3 == 5) {
                    this.rightarrow_3.remove();
                    window.addEventListener("keydown", (e) => this.keypressright_4(e));
                }
                break;
        }
    }
    keypressright_4(event) {
        switch (event.keyCode) {
            case 85:
                if (this._x_4 == 0) {
                    this.rightarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 73:
                if (this._x_4 == 1) {
                    this.rightarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 79:
                if (this._x_4 == 2) {
                    this.rightarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 74:
                if (this._x_4 == 3) {
                    this.rightarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 75:
                if (this._x_4 == 4) {
                    this.rightarrow_4.remove();
                    this.win = 1;
                }
                break;
            case 76:
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
class Selectcharacter {
    constructor() {
        this._check = false;
        this._next = false;
        this._horse1 = "";
        this._horse2 = "";
        this._chosen = '';
        this.createbackground();
        let y = ((window.innerHeight * 0.5) - 100);
        let x1 = ((window.innerWidth * 0.10));
        this.createplateau(x1, y);
        let x2 = ((window.innerWidth * 0.90) - 500);
        this.createplateau(x2, y);
        this.createcharacter_1();
        this.createcharacter_2();
        let colours = ["black", "green", "pink", "white"];
        colours.forEach(colour => {
            this.createProfile(colour);
        });
    }
    get check() { return this._check; }
    get next() { return this._next; }
    get horse1() { return this._horse1; }
    get horse2() { return this._horse2; }
    get chosen() { return this._chosen; }
    createbackground() {
        this.background = document.createElement("background");
        let selectcharacter = document.getElementsByTagName("selectcharacter")[0];
        selectcharacter.appendChild(this.background);
    }
    createProfile(colour) {
        console.log('hallo');
        this.profile = document.createElement("profile");
        let selectcharacter = document.getElementsByTagName("selectcharacter")[0];
        selectcharacter.appendChild(this.profile);
        this.profile.addEventListener("click", (e) => this.onProfileClick(e, colour));
        this.profile.classList.add(`p${colour}`);
        let x = (window.innerWidth * 0.17);
        this.profile.style.height = `${x}px`;
        this.profile.style.width = `${x}px`;
    }
    createplateau(x, y) {
        this.plateau = document.createElement("plateau");
        let plateau = document.getElementsByTagName("selectcharacter")[0];
        plateau.appendChild(this.plateau);
        this.plateau.style.transform = `translate(${x}px, ${y}px)`;
    }
    createcharacter_1() {
        this.character_1 = document.createElement("character_1");
        let selectcharacter = document.getElementsByTagName("selectcharacter")[0];
        selectcharacter.appendChild(this.character_1);
    }
    createcharacter_2() {
        this.character_2 = document.createElement("character_2");
        let selectcharacter = document.getElementsByTagName("selectcharacter")[0];
        selectcharacter.appendChild(this.character_2);
    }
    createknop() {
        this.knop = document.createElement("fightknop");
        let selectcharacter = document.getElementsByTagName(`selectcharacter`)[0];
        selectcharacter.appendChild(this.knop);
        this.knop.addEventListener("click", (e) => this.onknopClick(e));
        let x = ((window.innerWidth / 2) - (this.knop.clientWidth / 2));
        let y = ((window.innerHeight * 0.3));
        this.knop.style.transform = `translate(${x}px, ${y}px) scale(1.5)`;
    }
    onProfileClick(e, colour) {
        console.log(e.srcElement);
        if (this._check == true) {
            if (this._chosen != colour && this._horse2 === "") {
                this._check = true;
                this.character_2.classList.add(`c${colour}`);
                this._horse2 = colour;
                e.target.style.filter = `grayscale(1)`;
                this.createknop();
            }
        }
        if (this._check == false) {
            this._check = true;
            this.character_1.classList.add(`c${colour}`);
            this._horse1 = colour;
            e.target.style.filter = `grayscale(1)`;
        }
        this._chosen = colour;
        console.log(this._chosen);
    }
    onknopClick(e) {
        this._next = true;
        e.target.style.filter = `grayscale(1)`;
    }
}
class Story {
    constructor(player_1, player_2) {
        this._next = false;
        this._background = "";
        this.createbackground(player_1, player_2);
        this.createstoryknop();
    }
    get next() { return this._next; }
    get background() { return this._background; }
    createbackground(player_1, player_2) {
        this.storybg = document.createElement("storybg");
        let story = document.getElementsByTagName(`story`)[0];
        story.appendChild(this.storybg);
        if (player_1 == "black" && player_2 == "white" || player_1 == "white" && player_2 == "black") {
            this.storybg.classList.add(`bg1`);
            console.log(`hallo`);
            this._background = "SkyClouds";
        }
        else if (player_1 == "black" && player_2 == "green" || player_1 == "green" && player_2 == "black") {
            this.storybg.classList.add(`bg2`);
            console.log(`hallo`);
            this._background = "RainbowForest";
        }
        else if (player_1 == "green" && player_2 == "pink" || player_1 == "pink" && player_2 == "green") {
            this.storybg.classList.add(`bg3`);
            console.log(`hallo`);
            this._background = "SpaceCastle";
        }
        else if (player_1 == "green" && player_2 == "white" || player_1 == "white" && player_2 == "green") {
            this.storybg.classList.add(`bg2`);
            console.log(`hallo`);
            this._background = "RainbowForest";
        }
        else if (player_1 == "black" && player_2 == "pink" || player_1 == "pink" && player_2 == "black") {
            this.storybg.classList.add(`bg4`);
            console.log(`hallo`);
            this._background = "ArenaOrange";
        }
        else if (player_1 == "white" && player_2 == "pink" || player_1 == "pink" && player_2 == "white") {
            this.storybg.classList.add(`bg4`);
            console.log(`hallo`);
            this._background = "ArenaOrange";
        }
    }
    createstoryknop() {
        this.storyknop = document.createElement("fightknop");
        let story = document.getElementsByTagName(`story`)[0];
        story.appendChild(this.storyknop);
        this.storyknop.addEventListener("click", (e) => this.onstoryknopClick(e));
        let x = ((window.innerWidth / 2) - (this.storyknop.clientWidth / 2));
        let y = ((window.innerHeight * 0.85));
        this.storyknop.style.transform = `translate(${x}px, ${y}px)`;
    }
    onstoryknopClick(e) {
        this._next = true;
        e.target.style.filter = `grayscale(1)`;
    }
}
class Unicorn {
    constructor(x, colour) {
        this.x = 0;
        this.rightSpeed = 10;
        this.leftSpeed = 10;
        this.attackBack = false;
        this.explosion = new Explosion;
        this.win = 0;
        this.win2 = 0;
        this._colour = "";
        this._colour = colour;
        this.unicorn = document.createElement(`unicorn${colour}`);
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
    get colour() { return this._colour; }
    update() {
        this.attackMove();
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    update2() {
        this.attackMove2();
        this.unicorn.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(-1)`;
    }
    attackMove() {
        if ((this.x <= 403) && (this.win == 1)) {
            this.unicorn.classList.add(`${this.colour}run`);
            this.x += 4;
        }
        if ((this.x > 400) && (this.attackBack == false)) {
            this.unicorn.classList.remove(`${this.colour}run`);
            this.win = 0;
            this.explosion.flippedBack();
            this.attackAnimation();
        }
        if (this.attackBack == true) {
            this.x -= 4;
        }
        if ((this.x < 0) && (this.attackBack == true)) {
            this.x = 0;
            this.unicorn.classList.remove(`${this.colour}run`);
            this.attackBack = false;
        }
    }
    attackMove2() {
        if ((this.x >= 1000) && (this.win == 1)) {
            this.unicorn.classList.add(`${this.colour}run`);
            this.x -= 4;
        }
        if ((this.x < 1000) && (this.attackBack == false)) {
            this.unicorn.classList.remove(`${this.colour}run`);
            this.win = 0;
            this.explosion.flipped();
            this.attackAnimation();
        }
        if (this.attackBack == true) {
            this.x += 4;
        }
        if ((this.x > window.innerWidth - this.unicorn.clientWidth) && (this.attackBack == true)) {
            this.x = window.innerWidth - this.unicorn.clientWidth;
            this.unicorn.classList.remove(`${this.colour}run`);
            this.attackBack = false;
        }
    }
    specialattackplayer1() {
        this.unicorn.classList.add(`specialattack`);
        setTimeout(() => {
            this.explosion.flippedBack();
            this.attackAnimation();
        }, 1000);
        setTimeout(() => {
            this.unicorn.setAttribute("class", "");
        }, 3000);
    }
    specialattackplayer2() {
        this.unicorn.classList.add(`specialattack2`);
        setTimeout(() => {
            this.explosion.flipped();
            this.attackAnimation();
        }, 1000);
        setTimeout(() => {
            this.unicorn.setAttribute("class", "");
        }, 3000);
    }
    attackAnimation() {
        let attackSound = new Audio('audio/attack.mp3');
        this.explosion.explode();
        attackSound.play();
        setTimeout(() => {
            this.attackBack = true;
            this.unicorn.classList.add(`${this.colour}run`);
            this.explosion.stopExplode();
        }, 2000);
    }
}
class Winner {
    constructor(colour) {
        this._next = false;
        this.createbackground();
        this.createwinnerplat();
        this.creategif(colour);
        this.createquit();
        this.createagain();
    }
    get next() { return this._next; }
    createbackground() {
        this.background = document.createElement("background");
        let winner = document.getElementsByTagName("winner")[0];
        winner.appendChild(this.background);
    }
    creategif(colour) {
        this.winnergif = document.createElement("winnergif");
        let winner = document.getElementsByTagName("winner")[0];
        winner.appendChild(this.winnergif);
        this.winnergif.classList.add(`${colour}winner`);
    }
    createwinnerplat() {
        this.winnerplat = document.createElement("winnerplat");
        let winner = document.getElementsByTagName("winner")[0];
        winner.appendChild(this.winnerplat);
    }
    createagain() {
        this.againknop = document.createElement("againknop");
        let winner = document.getElementsByTagName("winner")[0];
        winner.appendChild(this.againknop);
        this.againknop.addEventListener("click", (e) => this.onagainKlick(e));
    }
    createquit() {
        this.quitknop = document.createElement("quitknop");
        let winner = document.getElementsByTagName("winner")[0];
        winner.appendChild(this.quitknop);
        this.quitknop.addEventListener("click", (e) => this.onquitKlick(e));
    }
    onagainKlick(e) {
        console.log("hallo");
        e.target.style.filter = `grayscale(1)`;
        this._next = true;
    }
    onquitKlick(e) {
        console.log("hallo");
        e.target.style.filter = `grayscale(1)`;
        window.location.href = 'homescreen.html';
    }
}
//# sourceMappingURL=main.js.map