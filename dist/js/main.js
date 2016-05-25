var Enemies = (function () {
    function Enemies(enemyLevel, c, positionX, positionY) {
        this.enemyDown = false;
        this.enemy = document.createElement("enemy");
        document.body.appendChild(this.enemy);
        this.posX = positionX;
        this.posY = positionY;
        this.move();
    }
    Enemies.prototype.move = function () {
        this.enemy.style.transform = "translate(" + this.posX + "px, " + this.posY + "px";
    };
    Enemies.prototype.checkCollision = function (pad) {
        if (this.posX <= pad.getX() + 80 && this.posX >= pad.getX() - 80 && this.posY <= pad.getY() + 150 && this.posY >= pad.getY() - 10) {
            if (this.enemyDown == false) {
                this.enemy.setAttribute("id", "enemyDead");
                this.enemyDown = true;
            }
            console.log("Geraaaaakt!");
        }
    };
    return Enemies;
}());
var Character = (function () {
    function Character(left, right, up, down) {
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
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
                break;
            case this.rightkey:
                this.rightSpeed = 5;
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
        this.character.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(-1)";
    };
    Character.prototype.getX = function () {
        return this.posX;
    };
    Character.prototype.getY = function () {
        return this.posY;
    };
    return Character;
}());
var Level = (function () {
    function Level(level, element) {
        this.enemyArray = [];
        var styleLeft = 50;
        var styleTop = 30;
        this.levelElement = document.createElement("level1");
        document.body.appendChild(this.levelElement);
        console.log("level " + level + " is loaded");
        for (var i = 0; i < 50; i++) {
            styleLeft = Math.random() * window.innerWidth;
            styleTop = Math.random() * window.innerHeight;
            this.enemy = new Enemies(level, this, styleLeft - 50, styleTop - 50);
            this.enemyArray.push(this.enemy);
        }
        this.character = new Character(65, 68, 87, 83);
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Level.prototype.gameLoop = function () {
        for (var i = 0; i < this.enemyArray.length; i++) {
            this.enemyArray[i].checkCollision(this.character);
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Level;
}());
var World = (function () {
    function World(level) {
        switch (level) {
            case 1:
                this.level1 = new Level(level, "level1");
                break;
            case 2:
                this.level2 = new Level(level, "level2");
                break;
            case 3:
                this.level3 = new Level(level, "level3");
                break;
            case 4:
                this.level4 = new Level(level, "level4");
                break;
            case 5:
                this.level5 = new Level(level, "level5");
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
        this.startButton.addEventListener("click", function () {
            this.player = new Player();
            this.world = new World(1);
        });
    }
    return Startgame;
}());
var Game = (function () {
    function Game() {
        this.startGame = new Startgame();
    }
    return Game;
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