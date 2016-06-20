/**
 * Spark
 */
class Spark {

    private div: HTMLElement;

    private posX: number;
    private posY: number;

    private speedX: number;
    private speedY: number;

    constructor(posX: number, posY: number) {
        this.posX = posX;
        this.posY = posY;

        this.div = document.createElement("spark");
        document.body.appendChild(this.div);

        this.speedX = Math.ceil(Math.random() * 5);
        this.speedY = Math.ceil(Math.random() * 5);
        // this.move();
    }

    public move(character: Character, player: Player):void {
        this.posX += this.speedX;
        this.posY += this.speedY;

        if( this.posX > window.innerWidth || this.posX < 0) { 
            this.div.remove();
        }
        
        if( this.posY > window.innerHeight || this.posY < 0) { 
            this.div.remove();
        }

        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";

        if (this.posX <= character.getX() + 80 && this.posX >= character.getX() - 80 && this.posY <= character.getY() + 150 && this.posY >= character.getY() - 10) {
            this.div.remove();
            player.characterHitted(1);
            console.log("spark hit character!!");
        }
    }

}