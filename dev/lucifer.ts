/// <reference path="character.ts"/>

/**
 * Enemies
 */
class Lucifer {

    private div: HTMLElement;

    private enemyLevel: number;

    private positionX;
    private positionY;

    private posX: number;
    private posY: number;

    private enemyDown: boolean = false;

    private counter: number;

    private hitpoints: number;

    constructor(enemyLevel: number) {
        this.enemyLevel = enemyLevel;
        this.hitpoints = enemyLevel;

        this.div = document.createElement("lucifer");
        document.body.appendChild(this.div);

        // //de huidige manier waarop we startpositie bepalen
            // this.posX = Math.random() * window.innerWidth;
            // this.posY = Math.random() * window.innerHeight;
        
        function randomX(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        
        function randomY(min, max) {
            return Math.floor(Math.random()  * (max-  min)) + min;
        }
        
        this.posX = randomX(200, window.innerWidth - 40);
        this.posY = randomY(50, window.innerHeight - 50);
        
        console.log("lucifer x position is " + this.posX);
        console.log("lucifer y position is " + this.posY);
        
        this.setLocation(this.posX, this.posY);
        
        
        
        
        //TODO: de nieuwe manier waarop de startpositie willen bepalen.
        
        //met de correcte minimale x waarde spawnen de lucifers niet gelijk onder de speler.
        //door de correcte maximale waarde spawnen de lucifers niet buiten het scherm.
        
        //minimale x moet 100 zijn
        //maximale x is innerwidth - 50

        
        //door de correcte minimale en maximale y waarden, spawnen de lucifers niet buiten het scherm.
        //minimale y  moet 100 zijn
        //maximale y is innerheight - 100
         
    }

    public setLocation(x:number, y:number) {
        this.div.style.transform = "translate(" + x + "px, " + y + "px";
    }

    public checkCollision(player: Character): boolean {
        if (this.posX <= player.getX() + 80 && this.posX >= player.getX() - 80 && this.posY <= player.getY() + 150 && this.posY >= player.getY() - 10) {
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