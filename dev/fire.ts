/**
 * Fire
 */
class Fire {
    
    private div: HTMLElement;
    
    private posX: number;
    private posY: number;
    
    private enemyDown: boolean = false;
    
    private hitPoints: number = 100;
    
    constructor() {
       this.div = document.createElement("fire");
       document.body.appendChild(this.div);
               
        function randomX(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        
        function randomY(min, max) {
            return Math.floor(Math.random()  * (max-  min)) + min;
        }
        
        this.posX = randomX(200, window.innerWidth - 40);
        this.posY = randomY(50, window.innerHeight - 50);
        
        this.setLocation(this.posX, this.posY);
    }
    
        public setLocation(x:number, y:number) {
            this.div.style.transform = "translate(" + x + "px, " + y + "px";
    }
}