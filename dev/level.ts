/// <reference path="enemies.ts"/>

/**
 * Level
 */
class Level {
    
    private levelElement : HTMLElement;
    
    constructor(level, element) {
        
        //create Element
        this.levelElement = document.createElement("level");
        this.levelElement.setAttribute("id", "level1");
        document.body.appendChild(this.levelElement);
        
        //which level is loaded
        console.log("level " + level + " is loaded");
        
        //add enemies
    }
}