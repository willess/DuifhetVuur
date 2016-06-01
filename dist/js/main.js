var Lucifer = (function () {
    function Lucifer(enemyLevel) {
        this.enemyDown = false;
        this.enemyLevel = enemyLevel;
        this.hitpoints = enemyLevel;
        this.div = document.createElement("lucifer");
        document.body.appendChild(this.div);
        this.posX = Math.random() * window.innerWidth;
        this.posY = Math.random() * window.innerHeight;
        this.move();
    }
    Lucifer.prototype.move = function () {
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px";
    };
    Lucifer.prototype.checkCollision = function (pad) {
        if (this.posX <= pad.getX() + 80 && this.posX >= pad.getX() - 80 && this.posY <= pad.getY() + 150 && this.posY >= pad.getY() - 10) {
            if (this.enemyDown == false) {
                this.div.classList.add("enemyDead");
                this.enemyDown = true;
                console.log("Geraaaaakt!");
            }
        }
    };
    return Lucifer;
}());
var Character = (function () {
    function Character(left, right, up, down) {
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.lastKey = 0;
        this.character = document.createElement("character");
        document.body.appendChild(this.character);
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        this.posX = 0;
        this.posY = 220;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Character.prototype.gameLoop = function () {
        this.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Character.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
            case this.leftkey:
                this.leftSpeed = 5;
                this.lastKey = 1;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                this.lastKey = 0;
                break;
        }
    };
    Character.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
            case this.leftkey:
                this.leftSpeed = 0;
                break;
            case this.rightkey:
                this.rightSpeed = 0;
                break;
        }
    };
    Character.prototype.move = function () {
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
        this.posY = this.posY - this.upSpeed + this.downSpeed;
        if (this.lastKey == 0) {
            this.character.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(-1)";
        }
        else if (this.lastKey == 1) {
            this.character.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        }
    };
    Character.prototype.getX = function () {
        return this.posX;
    };
    Character.prototype.getY = function () {
        return this.posY;
    };
    return Character;
}());
var Level1 = (function () {
    function Level1() {
        this.enemyAmount = 50;
        this.enemyArray = [];
        this.levelElement = document.createElement("level1");
        document.body.appendChild(this.levelElement);
        console.log("level 1 is loaded");
        for (var i = 0; i < this.enemyAmount; i++) {
            this.enemyArray.push(new Lucifer(1));
        }
        console.log(this.enemyArray);
        this.character = new Character(65, 68, 87, 83);
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Level1.prototype.gameLoop = function () {
        for (var i = 0; i < this.enemyArray.length; i++) {
            this.enemyArray[i].checkCollision(this.character);
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Level1;
}());
var World = (function () {
    function World(level) {
        switch (level) {
            case 1:
                this.level = new Level1();
                break;
            case 2:
                this.level = new Level2();
                break;
            case 3:
                this.level = new Level1();
                break;
            case 4:
                this.level = new Level1();
                break;
            case 5:
                this.level = new Level1();
                break;
            default:
                break;
        }
        console.log("test!!!");
    }
    return World;
}());
var Player = (function () {
    function Player() {
    }
    return Player;
}());
var Startgame = (function () {
    function Startgame() {
        this.startWrapper = document.createElement("wrapper");
        this.startWrapper.setAttribute("id", "startWrapper");
        document.body.appendChild(this.startWrapper);
        this.startButton = document.createElement("button");
        this.startButton.setAttribute("id", "startButton");
        this.startButton.innerHTML = "Start game";
        this.startWrapper.appendChild(this.startButton);
        this.startButton.addEventListener("click", this.createWorld.bind(this));
    }
    Startgame.prototype.createWorld = function () {
        this.startWrapper.remove();
        this.player = new Player();
        this.world = new World(2);
    };
    return Startgame;
}());
var Game = (function () {
    function Game() {
        this.startGame = new Startgame();
    }
    return Game;
}());
var Level2 = (function () {
    function Level2() {
        this.enemyAmount = 20;
        this.enemyArray = [];
        this.levelElement = document.createElement("level1");
        document.body.appendChild(this.levelElement);
        console.log("level 2 is loaded");
        for (var i = 0; i < this.enemyAmount; i++) {
            this.enemyArray.push(new Lucifer(1));
        }
        console.log(this.enemyArray);
        this.character = new Character(65, 68, 87, 83);
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Level2.prototype.gameLoop = function () {
        for (var i = 0; i < this.enemyArray.length; i++) {
            this.enemyArray[i].checkCollision(this.character);
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Level2;
}());
window.addEventListener("load", function () {
    new Game();
});
var Screenscore = (function () {
    function Screenscore() {
    }
    return Screenscore;
}());
//# sourceMappingURL=main.js.map