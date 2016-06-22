/**
 * Spark
 */
class Spark {

    public div: HTMLElement;

    private posX: number;
    private posY: number;

    private speedX: number;
    private speedY: number;

    private directionArray = [-1, -2, -3, -4, -5, -6, -7, -8, 1, 2, 3, 4, 5, 6, 7];

    private fire: Fire;
    private sparkTimer: number;

    constructor(posX: number, posY: number, fire: Fire, sparkTimer: number) {
        this.sparkTimer = sparkTimer;
        this.fire = fire;
        this.posX = posX;
        this.posY = posY;

        this.div = document.createElement("spark");
        document.body.appendChild(this.div);

        var X = this.directionArray[Math.floor(Math.random() * this.directionArray.length)];
        var Y = this.directionArray[Math.floor(Math.random() * this.directionArray.length)];

        this.speedX = Math.ceil(Math.random() * X);
        this.speedY = Math.ceil(Math.random() * Y);
        // this.move();
        this.timer();
    }

    public move(character: Character, player: Player):void {
        this.posX += this.speedX;
        this.posY += this.speedY;

        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";

        // if( this.posX > window.innerWidth || this.posX < 0) { 
        //     // this.div.remove();
        //     document.body.removeChild(this.div);
        //     console.log(this.div);
        //     this.fire.deleteSpark(this);
        // }
        
        // if( this.posY > window.innerHeight || this.posY < 0) { 
        //     // this.div.remove();
        //     console.log(this.div);
        //     this.fire.deleteSpark(this);
        // }

        if (this.posX <= character.getX() + 80 && this.posX >= character.getX() - 80 && this.posY <= character.getY() + 150 && this.posY >= character.getY() - 10) {
            this.div.remove();
            this.fire.deleteSpark(this);
            player.characterHitted(20);
            console.log("spark hit character!!");
        }
    }

    private timer() {
        var t = 0;
        var a = setInterval(() => {
        t++;
        if(t == this.sparkTimer){
                            console.log("deleted");
            this.div.remove();               
            this.fire.deleteSpark(this);
        }
        }, 1000);
    }
}