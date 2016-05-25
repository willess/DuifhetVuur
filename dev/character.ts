/**
 * Character
 */
class Character {
    
    private character : HTMLElement;
        
        //walk
    private downkey : number;
    private upkey : number;
    private leftkey : number;
    private rightkey : number;
       
        //speed
    private leftSpeed : number = 0;
    private rightSpeed : number = 0;
    private downSpeed : number = 0;
    private upSpeed : number = 0;
    
        //startposition on screen
    private posX : number;
    private posY : number;
    
    constructor(left:number, right:number, up:number, down:number) {
        
        this.character = document.createElement("character");
        document.body.appendChild(this.character);
        
        //input from keyboard
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        
        // position on screen
        this.posX = 0;
        this.posY = 220;
        
        // keyboard listener
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
        
        requestAnimationFrame(this.gameLoop.bind(this));        
    }
    
        private gameLoop(){
            this.move();
            requestAnimationFrame(this.gameLoop.bind(this));
        }
        // keyboard input changes speed
        private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upkey:
            this.upSpeed = 5;
            break;
        case this.downkey:
            this.downSpeed = 5;
            break;
        case this.leftkey:
            this.leftSpeed = 5;
            break;
        case this.rightkey:
            this.rightSpeed = 5;
            break;
        }
    }
    
    // speed to 0 when keyboard input is down
    private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upkey:
            this.upSpeed = 0;
            break;
        case this.downkey:
            this.downSpeed = 0;
            break;
        case this.leftkey:
            this.leftSpeed = 0;
            break;
        case this.rightkey:
            this.rightSpeed = 0;
            break;
        }
    }
        public move() : void {
        
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
        this.posY = this.posY - this.upSpeed + this.downSpeed;
                        
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        this.character.style.transform = "translate("+this.posX+"px, "+this.posY+"px) scaleX(-1)";
    }
}