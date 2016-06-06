var Lucifer = (function () {
    function Lucifer(enemyLevel) {
        this.enemyDown = false;
        this.enemyLevel = enemyLevel;
        this.hitpoints = enemyLevel;
        this.div = document.createElement("lucifer");
        document.body.appendChild(this.div);
        this.posX = Math.random() * window.innerWidth;
        this.posY = Math.random() * window.innerHeight;
        this.setLocation(this.posX, this.posY);
    }
    Lucifer.prototype.setLocation = function (x, y) {
        this.div.style.transform = "translate(" + x + "px, " + y + "px";
    };
    Lucifer.prototype.checkCollision = function (player) {
        if (this.posX <= player.getX() + 80 && this.posX >= player.getX() - 80 && this.posY <= player.getY() + 150 && this.posY >= player.getY() - 10) {
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
    function Character(left, right, up, down, posX, posY) {
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
        this.posX = posX;
        this.posY = posY;
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
        this.checkWalls();
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
    Character.prototype.checkWalls = function () {
        if (this.posX > -40) {
            this.posX = this.posX - this.leftSpeed;
        }
        if (this.posX < window.outerWidth) {
            this.posX = this.posX + this.rightSpeed;
        }
        if (this.posY > -25) {
            this.posY = this.posY - this.upSpeed;
        }
        if (this.posY < window.outerHeight - 260) {
            this.posY = this.posY + this.downSpeed;
        }
    };
    return Character;
}());
var Level = (function () {
    function Level(levelNumber, character, character2, toUseBackground) {
        this.matchArray = [];
        this.fireArray = [];
        switch (levelNumber) {
            case 1:
                console.log("level 1!");
                this.matches = 5;
                this.fire = 0;
                break;
            case 2:
                console.log("level 2!");
                this.matches = 20;
                this.fire = 4;
                break;
            case 3:
                console.log("level 2!");
                this.matches = 10;
                this.fire = 8;
                break;
            case 4:
                console.log("level 2!");
                this.matches = 10;
                this.fire = 10;
                break;
            case 5:
                console.log("level 2!");
                this.matches = 10;
                this.fire = 12;
                break;
            default:
                break;
        }
        this.levelElement = document.createElement(toUseBackground);
        document.body.appendChild(this.levelElement);
        this.levelNumber = levelNumber;
        if (Level.killCounter == null) {
            Level.killCounter = new EnemiesKilled(this.matches);
        }
        else {
            Level.killCounter.deathCount = 0;
            Level.killCounter.toKillEnemies = this.matches;
        }
        for (var i = 0; i < this.matches; i++) {
            this.matchArray.push(new Lucifer(levelNumber));
        }
        this.playerTwo = character2;
        this.playerOne = character;
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Level.prototype.gameLoop = function () {
        for (var i = 0; i < this.matchArray.length; i++) {
            if (this.matchArray[i].checkCollision(this.playerOne) || this.matchArray[i].checkCollision(this.playerTwo)) {
                Level.killCounter.updateScores();
            }
        }
        if (Level.killCounter.isLevelComplete()) {
            this.levelNumber++;
            new Level(this.levelNumber, this.playerOne, this.playerTwo, "level1");
            this.playerOne = null;
            this.enemyAmount = null;
            this.matchArray = null;
            this.levelElement = null;
            this.playerTwo = null;
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
        this.div = document.createElement("score");
        document.body.appendChild(this.div);
    }
    EnemiesKilled.prototype.updateScores = function () {
        this.deathCount++;
        this.div.innerHTML = "U heeft op dit moment " + this.deathCount + " fakkels gedoofd.";
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
        new Level(1, new Character(65, 68, 87, 83, 0, 150), new Character(37, 39, 38, 40, 0, 250), "level1");
    };
    return Startgame;
}());
//# sourceMappingURL=main.js.map