/**
 * Fire
 */
class Fire {
    
    private div: HTMLElement;
    
    private posX: number;
    private posY: number;
    
    public enemyDown: boolean = false;
    
    private hitPoints: number = 1000;
    
    private spark: Spark;
    public sparkArray = [];

    constructor(spark: boolean) {
       this.div = document.createElement("fire");
       document.body.appendChild(this.div);
               
        function randomX(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        
        function randomY(min, max) {
            return Math.floor(Math.random()  * (max-  min)) + min;
        }
        
        this.posX = randomX(200, window.innerWidth - 140);
        this.posY = randomY(50, window.innerHeight - 150);
        
        this.setLocation(this.posX, this.posY);

        if(spark) {
            var a = setInterval(() => {
                if(this.enemyDown == false){
                    this.spark = new Spark(this.posX, this.posY);
                    this.sparkArray.push(this.spark);
                }
                else {
                    clearInterval(a);
                }
            }, 3000)
            // this.spark = new Spark(this.posX, this.posY);

        }
    }
    
        public setLocation(x:number, y:number) {
            this.div.style.transform = "translate(" + x + "px, " + y + "px";
    }
        public deleteFire(){
        
        document.body.removeChild(this.div);
        
    }
            public checkFireCollision(pad: Bullet): boolean {
        if (this.posX <= pad.getFireX() + 80 && this.posX >= pad.getFireX() - 80 && this.posY <= pad.getFireY() + 50 && this.posY >= pad.getFireY() - 10) {
            //Als character raakt lucifer dan ...

            if (this.enemyDown == false) {
                this.hitPoints -= 10;
                // pad.deleteBullet();
                if(this.hitPoints == 0){
                this.div.classList.add("fireDead");
                // this.div.remove();
                delete this;

                this.enemyDown = true;
                var sound = new Howl({
                    urls: ["sound/step.wav"],
                    sprite: {
                    intro: [0, 150000],
                }
            });
           
        sound.play('intro');
            
                return true;
                }
            }
            return false;
        }
    }
    
    //check character when fire is hitted
    public checkCharacterCollision (pad: Character, player: Player, level: Level) {
        if (this.posX <= pad.getX() + 80 && this.posX >= pad.getX() - 80 && this.posY <= pad.getY() + 150 && this.posY >= pad.getY() - 10) {
            if(player.hitpoints > 0){
                player.characterHitted(10);
            }
            else {
                level.deleteAll();
                player.showGameOverScreen();
            }
        }   
    }

    public moveSpark(character: Character, player: Player) {
        for (var key of this.sparkArray) {
                key.move(character, player);
        }
    }

}