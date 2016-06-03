/// <reference path="world.ts"/>
/// <reference path="player.ts"/>

/**
 * Startgame
 */
class Startgame {

    private world: World;

    private player: Player;

    private startWrapper: HTMLElement;
    private startButton: HTMLElement;
    public nameTextField: HTMLElement;

    constructor() {

        //wrapper for button and text field
        this.startWrapper = document.createElement("wrapper");
        this.startWrapper.setAttribute("id", "startWrapper");
        document.body.appendChild(this.startWrapper);

        //button with startgame
        this.startButton = document.createElement("button");
        this.startButton.setAttribute("id", "startButton");
        this.startButton.innerHTML = "Start game";
        this.startWrapper.appendChild(this.startButton);


        this.startButton.addEventListener("click", this.createWorld.bind(this));
    }


    private createWorld() {
        this.startWrapper.remove();
        new Level(1, new Character(65, 68, 87, 83, 0, 150), new Character(37, 39, 38, 40, 0, 250), 1, "level1");
    }
}