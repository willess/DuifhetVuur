class Level {

    private enemyAmount: number;
    private playerOne: Character;
    private playerTwo: Character;
    private static killCounter: EnemiesKilled;
    private levelNumber: number;
    public levelElement: HTMLElement;
    
    private match: Lucifer;
    
    private matches: number;
    private fire: number;
    
    private matchArray = [];
    private fireArray = [];
    
    private weapon: boolean;

    constructor(levelNumber: number, toUseBackground: string) {
       
        
        switch (levelNumber) {
            case 1:
            console.log("Level 1");
                this.matches = 5;
                this.fire = 0;
                this.weapon = false;
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
        
        this.playerTwo = new Character(65, 68, 87, 83, 0, 150);
        this.playerOne =  new Character(37, 39, 38, 40, 0, 250);
        
        this.levelNumber = levelNumber;
        if (Level.killCounter == null) {
            Level.killCounter = new EnemiesKilled(this.matches);
        } else {
            Level.killCounter.deathCount = 0;
            Level.killCounter.toKillEnemies = this.matches;
        }

        for (var i = 0; i < this.matches; i++) {
            this.match = new Lucifer(levelNumber);
            this.matchArray.push(this.match);
        }

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
           
            for (var c of this.matchArray) {
                c.deleteMatch();
            }
           
            this.playerOne.deleteCharacter();
            this.playerTwo.deleteCharacter();
            // this.playerOne = null;
            this.matchArray = null;
            this.levelElement = null;
            // this.levelNumber = null;
            this.playerTwo = null;
            this.levelNumber++;
            new Level(this.levelNumber, "level1");
        }


        requestAnimationFrame(this.gameLoop.bind(this));
    }


}