class Level {

    private enemyAmount: number;
    private playerOne: Character;
    private playerTwo: Character;
    private static killCounter: EnemiesKilled;
    private levelNumber: number;
    public levelElement: HTMLElement;
    
    private matches: number;
    private fire: number;
    
    private matchArray = [];
    private fireArray = [];

    constructor(levelNumber: number, character: Character, character2: Character, toUseBackground: string) {
       
        
        switch (levelNumber) {
            case 1:
            console.log("level 1!");
            console.log("innerwidth" + window.innerWidth);
            console.log("innerheight" + window.innerHeight);
            console.log("outerwidth" + window.outerWidth);
            console.log("outerheight" + window.outerHeight);
            
            
                this.matches = 5;
                this.fire = 0;
                break;
            case 2:
            console.log("level 2!");
                this.matches = 20;
                this.fire = 4;

                break;
            case 3:
                console.log("level 3!");
                this.matches = 10;
                this.fire = 8;

                break;
            case 4:
                console.log("level 4!");
                this.matches = 10;
                this.fire = 10;

                break;
            case 5:
                console.log("level 5!");
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
        } else {
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

    private gameLoop() {
        //loop trough the matchArray and check collision


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
            // this.levelNumber = null;
            this.playerTwo = null;
        }


        requestAnimationFrame(this.gameLoop.bind(this));
    }


}