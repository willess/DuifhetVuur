/// <reference path="world.ts"/>
/// <reference path="player.ts"/>

/**
 * Startgame
 */
class Startgame {
    
    private world : World;
    
    private player : Player;

    private startButton : HTMLElement;
    
    constructor() {
        
        //button with startgame
        this.startButton = document.createElement("button");
        this.startButton.setAttribute("id", "startButton");
        this.startButton.innerHTML = "Start game";
        document.body.appendChild(this.startButton);
        this.startButton.addEventListener("click", function () {
            
            //add player
            this.player = new Player();
            document.body.removeChild(this);
            //create World
            this.world = new World(1);
       });
       
        //if button is clicked > create the world
        //this.world = new World();
        
    }
}