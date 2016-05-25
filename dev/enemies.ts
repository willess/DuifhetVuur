/// <reference path="character.ts"/>

/**
 * Enemies
 */
class Enemies {
    
    private enemy : HTMLElement;
    
    private enemy1 : Level;
    
    private positionX;
    private positionY;
    
    private posX : number;
    private posY : number;
    
    private enemyDown : boolean = false;

    
    constructor(enemyLevel, c:Level, positionX : number, positionY : number) {
        this.enemy = document.createElement("enemy");
        document.body.appendChild(this.enemy);
        
        this.posX = positionX;
        this.posY = positionY;
        
        this.move();
    }
    
        public move() {
        this.enemy.style.transform = "translate(" + this.posX + "px, " + this.posY + "px";
    }
        public checkCollision(pad:Character) {
            if(this.posX <= pad.getX() + 50 && this.posX >= pad.getX() - 50 && this.posY <= pad.getY() + 50 && this.posY >= pad.getY() - 50 ){
                console.log("Geraaaaakt!");
            }
        }
    
}