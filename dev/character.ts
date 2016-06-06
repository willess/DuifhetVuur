/// <reference path="lucifer.ts"/>

/**
 * Character
 */
class Character {

    private character: HTMLElement;

    //walk
    private downkey: number;
    private upkey: number;
    private leftkey: number;
    private rightkey: number;

    //speed
    private leftSpeed: number = 0;
    private rightSpeed: number = 0;
    private downSpeed: number = 0;
    private upSpeed: number = 0;

    //startposition on screen
    private posX: number;
    private posY: number;

    private lastKey: number = 0;

    constructor(left: number, right: number, up: number, down: number, posX: number, posY: number) {

        this.character = document.createElement("character");
        document.body.appendChild(this.character);

        //input from keyboard
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;

        // position on screen
        this.posX = posX;
        this.posY = posY;

        // keyboard listener
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private gameLoop() {
        this.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    // keyboard input changes speed
    private onKeyDown(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
            case this.leftkey:
                this.leftSpeed = 5;
                this.lastKey = 1;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                this.lastKey = 0;
                break;
        }
    }

    // speed to 0 when keyboard input is down
    private onKeyUp(event: KeyboardEvent): void {
        switch (event.keyCode) {
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
    private move(): void {

    this.checkWalls();

        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        if (this.lastKey == 0) {
            this.character.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(-1)";
        }
        else if (this.lastKey == 1) {
            this.character.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        }
    }
    public getX(): number {
        return this.posX;
    }

    public getY(): number {
        return this.posY;
    }

  private checkWalls(): void {
    
        if (this.posX > -40) {
            this.posX = this.posX - this.leftSpeed;
        }
        if (this.posX < window.outerWidth) {
            this.posX = this.posX + this.rightSpeed;
        }
        if (this.posY > -25) {
            this.posY = this.posY - this.upSpeed;
        }
        if (this.posY < window.outerHeight-260) {

            this.posY = this.posY + this.downSpeed;
        }
    }
    
    public deleteCharacter(): void {
        document.body.removeChild(this.character);
    }
}