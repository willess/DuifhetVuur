/// reference path="newLevel.ts"/>
class Level {

    private enemyAmount: number;
    private playerOne: Character;
    private playerTwo: Character;
    private static killCounter: EnemiesKilled;
    private levelNumber: number;
    public levelElement: HTMLElement;
    
    private startWrapper: HTMLElement;
    private startButton: HTMLElement;
    
    private match: Lucifer;
    private fire: Fire;
    
    private matches: number;
    private fires: number;
    
    private matchArray = [];
    private fireArray = [];
    
    private weapon: boolean;

    constructor(levelNumber: number, toUseBackground: string) {
       
        
        switch (levelNumber) {
            case 1:
            console.log("Level 1");
                this.matches = 5;
                this.fires = 0;
                this.weapon = false;
                break;
            case 2:
            console.log("level 2!");
                this.matches = 20;
                this.fires = 4;
                this.weapon = true;
                break;
            case 3:
                console.log("level 3!");
                this.matches = 10;
                this.fires = 8;
                this.weapon = true;
                break;
            case 4:
                console.log("level 4!");
                this.matches = 10;
                this.fires = 10;
                this.weapon = true;

                break;
            case 5:
                console.log("level 5!");
                this.matches = 10;
                this.fires = 12;
                this.weapon = true;
                break;
        
            default:
                break;
        }
        
        this.levelElement = document.createElement(toUseBackground);
        document.body.appendChild(this.levelElement);
        
        this.playerTwo = new Character(65, 68, 87, 83, 0, 150, this.weapon, 32);
        // this.playerOne =  new Character(37, 39, 38, 40, 0, 250, this.weapon, 32);
        
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
        
        for(var i = 0; i < this.fires; i++){
            this.fire = new Fire();
            this.fireArray.push(this.fire);
        }

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private gameLoop() {
        //loop trough the matchArray and check collision


        for (var i = 0; i < this.matchArray.length; i++) {
            if (this.matchArray[i].checkCollision(this.playerTwo)) {
                Level.killCounter.updateScores();
            }
        }

        if (Level.killCounter.isLevelComplete()) {
            for (var c of this.matchArray) {
                c.deleteMatch();
            }
           
            // this.playerOne.deleteCharacter();
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