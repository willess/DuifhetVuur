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
    
    private counter : number;
    
    constructor(enemyLevel, c:Level, positionX : number, positionY : number) {
        this.enemy = document.createElement("enemy");
        document.body.appendChild(this.enemy);
        
        this.posX = positionX;
        this.posY = positionY;
        
        this.move();
        
        // this.counter = 0;
    }
    
        public move() {
        this.enemy.style.transform = "translate(" + this.posX + "px, " + this.posY + "px";
    }
        public checkCollision(pad:Character) {
            if(this.posX <= pad.getX() + 80 && this.posX >= pad.getX() - 80 && this.posY <= pad.getY() + 150 && this.posY >= pad.getY() - 10 ){
                if(this.enemyDown == false){
                    this.enemy.setAttribute("id", "enemyDead");
                    this.enemyDown = true;
                }
                console.log("Geraaaaakt!");
            }
        }
    
}