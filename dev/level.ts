/// <reference path="enemies.ts"/>

/**
 * Level
 */
class Level {
    
    public levelElement : HTMLElement;
    
    private character : Character;
    
    public enemy : Enemies;
    
    constructor(level, element) {
        
        //create Element
        this.levelElement = document.createElement("level1");
        document.body.appendChild(this.levelElement);
        
        //which level is loaded
        console.log("level " + level + " is loaded");
        
        //add character
        this.character = new Character(65, 68, 87, 83);
        
        //add enemies
        this.enemy = new Enemies(level, this);
    }
}