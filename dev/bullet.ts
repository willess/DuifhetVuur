/**
 * Bullet
 */
class Bullet {
    
    private bullet: HTMLElement;
    
    private posX: number;
    private posY: number;
    private startPositionX: number;
    
    private enemyDown: boolean = false;
    
    private bulletSpeed: number;
    
    private lastKey: number;

    constructor(posX: number, posY: number, lastKey: number, weapon: HTMLElement) {
        this.bullet = document.createElement("bullet");
        document.body.appendChild(this.bullet);
        
        this.posX = posX;
        this.posY = posY;
        this.startPositionX = posX;
        this.lastKey = lastKey;
        
                    var sound = new Howl({
                urls: ["sound/shot/waterShot.wav"],
                sprite: {
                    intro: [0, 150000],
                }
            });
           
        sound.play('intro');
                
        requestAnimationFrame(this.gameLoop.bind(this));

        
    }
    private gameLoop() {
        this.bulletMove();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private bulletMove() {
        if(this.lastKey == 0){
            this.bulletSpeed = 10;
            this.posX += this.bulletSpeed;
            this.bullet.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
            if(this.posX > window.innerWidth  || this.posX > this.startPositionX + 500) {
            document.body.removeChild(this.bullet);
            }
        }
            if(this.lastKey == 1){
                this.bulletSpeed = -10;
                this.posX += this.bulletSpeed;
                this.bullet.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(-1)";
                this.bullet.style.left = "15px";
                if(this.posX < 0 || this.posX < this.startPositionX - 500) {
                   document.body.removeChild(this.bullet);
            }
        }
    }
    public getBulletX() {
        return this.posX;
    }
    public getBulletY() {
        return this.posX;
    }
}