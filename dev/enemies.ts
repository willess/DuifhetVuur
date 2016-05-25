/**
 * Enemies
 */
class Enemies {
    
    private enemy : HTMLElement;
    
    private enemy1 : Level;
    
    constructor(enemyLevel, c:Level) {
        this.enemy = document.createElement("enemy");
        document.body.appendChild(this.enemy);
    }
}