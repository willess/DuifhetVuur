/// <reference path="enemies.ts"/>

/**
 * Level
 */
class Level {
    //declare variables
    public levelElement : HTMLElement;
    
    private character : Character;
    
    public enemy : Enemies;
    
    public enemyArray = [];
    
    constructor(level, element) {
        
        let styleLeft : number = 50;
        let styleTop : number = 30
        //create Element
        this.levelElement = document.createElement("level1");
        document.body.appendChild(this.levelElement);
        
        //which level is loaded
        console.log("level " + level + " is loaded");
        
        //add enemies
        for (var i = 0; i < 50; i++) {
            //random left and top enemy
            styleLeft = Math.random() * window.innerWidth;
            styleTop = Math.random() * window.innerHeight;
            
            //add new enemy
            this.enemy = new Enemies(level, this, styleLeft - 50, styleTop - 50);
            //push new enemy to array
            this.enemyArray.push(this.enemy);
        }
        
         //add character
        this.character = new Character(65, 68, 87, 83);
        
        //start the gameloop
        requestAnimationFrame(this.gameLoop.bind(this));        
    }
    
        private gameLoop(){
            //loop trough the enemyArray and check collision
            for (var i = 0; i < this.enemyArray.length; i++) {
                    this.enemyArray[i].checkCollision(this.character);

            }
            // this.enemy.checkCollision(this.character);
            requestAnimationFrame(this.gameLoop.bind(this));
        }
   
}