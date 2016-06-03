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
                return true;
            }
            return false;
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
var Level = (function () {
    function Level(levelNumber, character, enemyAmount, toUseBackground) {
        this.enemyArray = [];
        this.levelElement = document.createElement(toUseBackground);
        document.body.appendChild(this.levelElement);
        this.enemyAmount = enemyAmount;
        this.levelNumber = levelNumber;
        Level.killCounter = new EnemiesKilled(enemyAmount);
        for (var i = 0; i < enemyAmount; i++) {
            this.enemyArray.push(new Lucifer(levelNumber));
        }
        this.character = character;
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Level.prototype.gameLoop = function () {
        for (var i = 0; i < this.enemyArray.length; i++) {
            if (this.enemyArray[i].checkCollision(this.character)) {
                Level.killCounter.updateScores();
            }
        }
        if (Level.killCounter.isLevelComplete()) {
            new Level(this.levelNumber++, this.character, this.enemyAmount * 2, "level1");
            this.character = null;
            this.enemyAmount = null;
            this.enemyArray = null;
            this.levelElement = null;
            this.levelNumber = null;
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Level;
}());
window.addEventListener("load", function () {
    new Startgame();
});
var Player = (function () {
    function Player() {
    }
    return Player;
}());
var EnemiesKilled = (function () {
    function EnemiesKilled(toKillEnemies) {
        this.deathCount = 0;
        this.div = document.getElementsByTagName("ui")[0];
        this.toKillEnemies = toKillEnemies;
        console.log("Game start!");
    }
    EnemiesKilled.prototype.updateScores = function () {
        this.deathCount++;
        console.log("Je hebt " + this.deathCount + " vijand(en) verslagen!");
        this.isLevelComplete();
    };
    EnemiesKilled.prototype.isLevelComplete = function () {
        if (this.deathCount == this.toKillEnemies) {
            console.log("Je hebt het level gehaald!");
            return true;
        }
        return false;
    };
    return EnemiesKilled;
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
        new Level(1, new Character(65, 68, 87, 83), 50, "level1");
    };
    return Startgame;
}());
//# sourceMappingURL=main.js.map