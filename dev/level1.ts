/// <reference path="enemies.ts"/>

/**
 * Level
 */
class Level1 {
    // Variables per level
    private enemyAmount: number = 50;
    //declare variables
    public levelElement: HTMLElement;
    private character: Character;
    public enemyArray = [];

    constructor() {
        //create Element
        this.levelElement = document.createElement("level1");
        document.body.appendChild(this.levelElement);

        //which level is loaded
        console.log("level 1 is loaded");

        //add enemies
        for (var i = 0; i < this.enemyAmount; i++) {
            //push new enemy to array
            this.enemyArray.push(new Lucifer(1));
        }

        console.log(this.enemyArray);

        //add character
        this.character = new Character(65, 68, 87, 83);

        //start the gameloop
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private gameLoop() {
        //loop trough the enemyArray and check collision
        for (var i = 0; i < this.enemyArray.length; i++) {
            this.enemyArray[i].checkCollision(this.character);

        }
        // this.enemy.checkCollision(this.character);
        requestAnimationFrame(this.gameLoop.bind(this));
    }

}