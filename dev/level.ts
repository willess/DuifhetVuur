class Level {

    private enemyAmount: number;
    private character: Character;
    private enemyArray = [];
    private static killCounter: EnemiesKilled;
    private levelNumber: number;
    public levelElement: HTMLElement;
    
    constructor(levelNumber:number, character:Character, enemyAmount:number, toUseBackground: string){
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
    
    private gameLoop() {
        //loop trough the enemyArray and check collision
        
        
        for (var i = 0; i < this.enemyArray.length; i++) {
            if (this.enemyArray[i].checkCollision(this.character)) {
                Level.killCounter.updateScores();
            }
        }

        if (Level.killCounter.isLevelComplete()) {
            new Level(this.levelNumber++, this.character, this.enemyAmount*2, "level1");
            this.character = null;
            this.enemyAmount = null;
            this.enemyArray = null;
            this.levelElement = null;
            this.levelNumber = null; 
        }

        
        requestAnimationFrame(this.gameLoop.bind(this));
    }


}