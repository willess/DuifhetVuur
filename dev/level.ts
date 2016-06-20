/// reference path="newLevel.ts"/>
/// reference path="player.ts"/>

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

    public level: middleScreen;
    private time: number;

    private timeCounter: number;

    public player: Player;
    private playerName: string;

    private spark: boolean;

    constructor(levelNumber: number, toUseBackground: string, time: number, player: Player) {

        this.playerName = player.name;
        this.player = player;

        this.time = time;

        this.timeCounter = setInterval(this.timer.bind(this), 1000);   


        switch (levelNumber) {
            case 1:
                //level 1
                this.matches = 5;
                this.fires = 0;
                this.weapon = false;
                break;
            case 2:
                //level 2
                this.matches = 20;
                this.fires = 4;
                this.weapon = true;
                break;
            case 3:
                //level 3
                this.matches = 10;
                this.fires = 8;
                this.weapon = true;
                this.spark = true;
                break;
            case 4:
                //level 4
                this.matches = 10;
                this.fires = 10;
                this.weapon = true;
                this.spark = true;
                break;
            case 5:
                //level 5
                this.matches = 1;
                this.fires = 1;
                this.weapon = true;
                this.spark = true;
                break;

            default:
                break;
        }

        this.levelElement = document.createElement(toUseBackground);
        document.body.appendChild(this.levelElement);

        // this.playerTwo = new Character(65, 68, 87, 83, 0, 150, this.weapon, 13);
        this.playerOne = new Character(37, 39, 38, 40, 0, 250, this.weapon, 32);


        this.levelNumber = levelNumber;
        if (Level.killCounter == null) {
            Level.killCounter = new EnemiesKilled(this.matches + this.fires);
        } else {
            Level.killCounter.deathCount = 0;
            Level.killCounter.toKillEnemies = this.matches + this.fires;
        }

        for (var i = 0; i < this.matches; i++) {
            this.match = new Lucifer(levelNumber);
            this.matchArray.push(this.match);
        }

        for (var i = 0; i < this.fires; i++) {
            this.fire = new Fire(this.spark);
            this.fireArray.push(this.fire);
        }

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    public timer() {
        this.time++;
        // console.log(this.time);
        return this.time;
    }

    private gameLoop() {
        // console.log(this.playerTwo.bulletArray);

        for (var i = 0; i < this.fireArray.length; i++) {
            
            this.fireArray[i].moveSpark(this.playerOne, this.player);
            
            for (var key of this.playerOne.bulletArray) {
                    
                    if(this.fireArray[i].checkFireCollision(key)) {
                        Level.killCounter.updateScores();
                    }
                }
            }
        
        // this.playerTwo.move();
        this.playerOne.move();

        //loop trough the matchArray and check collision
        for (var i = 0; i < this.matchArray.length; i++) {
            if (this.matchArray[i].checkCollision(this.playerOne)) {
                Level.killCounter.updateScores();
            }
        }
        //check if character hits an fire
        for (var i = 0; i < this.fireArray.length; i++) {
            if(this.fireArray[i].enemyDown == false){
            this.fireArray[i].checkCharacterCollision(this.playerOne, this.player, this) 
            }
        }

        // loop door de bullet array
        // bullet.update();

        if (Level.killCounter.isLevelComplete()) {
            this.endLevel();
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private endLevel() {
        for (var c of this.matchArray) {
            c.deleteMatch();
        }
        for (var c of this.fireArray) {
            c.deleteFire();
        }
        this.levelElement.remove();
        this.playerOne.deleteCharacter();
        // this.playerTwo.deleteCharacter();
        this.playerOne = null;
        // this.playerTwo = null;
        this.matchArray = null;
        this.fireArray = null;
        this.levelElement = null;
        this.levelNumber++;
        clearInterval(this.timeCounter);

        if(this.levelNumber == 2){
            new middleScreen(this.levelNumber -1, this.time);
        }

        if(this.levelNumber == 3){
            new middleScreen(this.levelNumber -1, this.time);
        }

        if(this.levelNumber == 4){
            new middleScreen(this.levelNumber -1, this.time);
        }

        if(this.levelNumber == 5){
            new middleScreen(this.levelNumber -1, this.time);
        }

        if(this.levelNumber > 5) {
            Level.killCounter.div.remove();
            new CreditRoll(this.time, this.playerName);
        }
        else{
            new Level(this.levelNumber, "level1", this.time, this.player);
        }

    }

    public deleteAll() {
        for (var c of this.matchArray) {
            c.deleteMatch();
        }
        for (var c of this.fireArray) {
            c.deleteFire();
        }

        this.playerOne.deleteCharacter();
        // this.playerTwo.deleteCharacter();
        this.playerOne = null;
        // this.playerTwo = null;
        this.matchArray = null;
        this.fireArray = null;
        this.levelElement = null;
        this.levelNumber++;
        clearInterval(this.timeCounter);
    }

}