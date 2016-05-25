var Enemies = (function () {
    function Enemies() {
    }
    return Enemies;
}());
var Level = (function () {
    function Level(level, element) {
        this.levelElement = document.createElement("level");
        this.levelElement.setAttribute("id", "level1");
        document.body.appendChild(this.levelElement);
        console.log("level " + level + " is loaded");
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