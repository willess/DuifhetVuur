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

    private randomSpeed = [1000, 1300, 2000, 4000, 800, 1700, 2800, 3100];

    private sparkTimer: number;

    constructor(spark: boolean, sparkTimer: number) {
        this.sparkTimer = sparkTimer;
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
            var rand = this.randomSpeed[Math.floor(Math.random() * this.randomSpeed.length)];

            var a = setInterval(() => {
                if(this.enemyDown == false){
                    this.spark = new Spark(this.posX, this.posY, this, this.sparkTimer);
                    this.sparkArray.push(this.spark);
                }
                else {
                    clearInterval(a);
                }
            }, rand)
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
            }
        }   
    }

    public moveSpark(character: Character, player: Player) {
        for (var key of this.sparkArray) {
                key.move(character, player);
        }
    }

    public deleteSpark(spark: Spark) {
        for (var i = 0; i < this.sparkArray.length; i++) {
            if(this.sparkArray[i] == spark) {
                this.sparkArray.splice(i, 1);
            }            
        }
    }

}