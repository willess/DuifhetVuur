class Level {

    private enemyAmount: number;
    private playerOne: Character;
    private playerTwo: Character;
    private enemyArray = [];
    private static killCounter: EnemiesKilled;
    private levelNumber: number;
    public levelElement: HTMLElement;

    constructor(levelNumber: number, character: Character, character2: Character, enemyAmount: number, toUseBackground: string) {
        this.levelElement = document.createElement(toUseBackground);

        document.body.appendChild(this.levelElement);



        this.enemyAmount = enemyAmount;
        this.levelNumber = levelNumber;
        if (Level.killCounter == null) {

            Level.killCounter = new EnemiesKilled(enemyAmount);
        } else {
            Level.killCounter.deathCount = 0;
            Level.killCounter.toKillEnemies = enemyAmount;
        }



        for (var i = 0; i < enemyAmount; i++) {
            this.enemyArray.push(new Lucifer(levelNumber));

        }

        this.playerTwo = character2;
        this.playerOne = character;

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private gameLoop() {
        //loop trough the enemyArray and check collision


        for (var i = 0; i < this.enemyArray.length; i++) {
            if (this.enemyArray[i].checkCollision(this.playerOne) || this.enemyArray[i].checkCollision(this.playerTwo)) {
                Level.killCounter.updateScores();
            }
        }

        if (Level.killCounter.isLevelComplete()) {
            new Level(this.levelNumber++, this.playerOne, this.playerTwo, this.enemyAmount * 2, "level1");
            this.playerOne = null;
            this.enemyAmount = null;
            this.enemyArray = null;
            this.levelElement = null;
            this.levelNumber = null;
            this.playerTwo = null;
        }


        requestAnimationFrame(this.gameLoop.bind(this));
    }


}