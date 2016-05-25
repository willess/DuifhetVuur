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
    return Character;
}());
var Enemies = (function () {
    function Enemies(enemyLevel, c) {
        this.enemy = document.createElement("enemy");
        document.body.appendChild(this.enemy);
    }
    return Enemies;
}());
var Level = (function () {
    function Level(level, element) {
        this.levelElement = document.createElement("level1");
        document.body.appendChild(this.levelElement);
        console.log("level " + level + " is loaded");
        this.character = new Character(65, 68, 87, 83);
        this.enemy = new Enemies(level, this);
    }
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
        this.startButton = document.createElement("button");
        this.startButton.setAttribute("id", "startButton");
        this.startButton.innerHTML = "Start game";
        document.body.appendChild(this.startButton);
        this.startButton.addEventListener("click", function () {
            this.player = new Player();
            document.body.removeChild(this);
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