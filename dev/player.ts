/// <reference path="level.ts" />


/**
 * Player
 */
class Player {
    
    public name : string;
    public score : number;

    public time: number;
    public hitpoints: number = 2000;
    public currentHP: number = 2000;

    private healthbar: HTMLElement;
    private playerName: string;
    
    constructor(name: string) {

        this.playerName = name;

        this.healthbar = document.createElement("healthbar");
        this.healthbar.innerHTML = "HP: " + this.currentHP + "/" + this.hitpoints;
        document.body.appendChild(this.healthbar);

        this.name = name;
        this.time = setInterval(this.timer.bind(this), 1000);   

    }
    public timer() {
        this.time++;
        // console.log(this.time - 3);
        return this.time;
    }

    public characterHitted(){
        this.hitpoints = this.hitpoints - 10;
        this.showHP(this.hitpoints);
    }

    public showHP(hp: number) {
        this.currentHP = hp;
        console.log(this.currentHP);
        if(this.currentHP <= 0){
            console.log("Game Over!");
        }
    }

}