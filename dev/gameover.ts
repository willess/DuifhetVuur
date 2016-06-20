/**
 * gameOver
 */
class gameOver {

    private background:HTMLElement;
    private gameScore:HTMLElement;
    private playAgain:HTMLElement;

    private reload: boolean;

    constructor() {

    this.reload = true;
         
    this.background = document.createElement("background");
    this.background.setAttribute("id", "gameover-bg");
    document.body.appendChild(this.background);

    this.gameScore = document.createElement("gameover");
    this.gameScore.setAttribute("id", "gameover-text");
    this.gameScore.innerHTML = "GAME OVER";
    document.body.appendChild(this.gameScore);

    this.playAgain = document.createElement("button");
    this.playAgain.setAttribute("id", "againbutton");
    this.playAgain.style.marginTop = "400px";
    this.playAgain.innerHTML = "Opnieuw spelen?";
    this.background.appendChild(this.playAgain);
    this.playAgain.addEventListener("click", this.again.bind(this));

    }

    private again(){
        console.log("again");
        this.background.remove();
        this.gameScore.remove();
        new Startgame(true, this.reload);
    }
}