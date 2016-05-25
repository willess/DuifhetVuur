/// <reference path="enemies.ts"/>

/**
 * Level
 */
class Level {
    
    public levelElement : HTMLElement;
    
    private character : Character;
    
    public enemy : Enemies;
    
    constructor(level, element) {
        
        let styleLeft : number = 50;
        let styleTop : number = 30
        //create Element
        this.levelElement = document.createElement("level1");
        document.body.appendChild(this.levelElement);
        
        //which level is loaded
        console.log("level " + level + " is loaded");
        
        //add enemies
        for (var i = 0; i < 5; i++) {
            styleLeft += 50;
            styleTop += 39;

            styleLeft = Math.random() * window.innerWidth;
            styleTop = Math.random() * window.innerHeight;

            this.enemy = new Enemies(level, this, styleLeft - 50, styleTop - 50);
        }
        
         //add character
        this.character = new Character(65, 68, 87, 83);
        
        // this.enemy = new Enemies(level, this, 300, 400);
        
    }
   
}