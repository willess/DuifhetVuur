/// <reference path="character.ts"/>

/**
 * Enemies
 */
class Lucifer {

    private div: HTMLElement;

    private enemyLevel:number;

    private positionX;
    private positionY;

    private posX: number;
    private posY: number;

    private enemyDown: boolean = false;

    private counter: number;
    
    private hitpoints: number;
    
    //?
    //private game:Game;

    constructor(enemyLevel:number) {
        this.enemyLevel = enemyLevel;
        this.hitpoints = enemyLevel;
        
        
        this.div = document.createElement("lucifer");
        document.body.appendChild(this.div);
        

        this.posX = Math.random() * window.innerWidth;
        this.posY =  Math.random() * window.innerHeight;

        this.move();

        // this.counter = 0;
    }

    public move() {
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px";
    }
    
    public checkCollision(pad: Character) : boolean {
        if (this.posX <= pad.getX() + 80 && this.posX >= pad.getX() - 80 && this.posY <= pad.getY() + 150 && this.posY >= pad.getY() - 10) {
           //Als character raakt lucifer dan ...
            if (this.enemyDown == false) {
                //this.div.setAttribute("id", "enemyDead");
                this.div.classList.add("enemyDead");
                this.enemyDown = true;
                console.log("Geraaaaakt!");

                return true;
               
            }
            return false;           
        }
    }
}