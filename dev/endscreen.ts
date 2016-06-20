/**
 * EndScreen
 */

/// <reference path="startgame.ts" />


class EndScreen {
    
    private background:HTMLElement;
    private playAgain:HTMLElement;
    private endGame:HTMLElement;
    private highScore:HTMLElement;
    private time: number;
    private playerName:string;
    
    constructor(time: number, name: string) {   
        this.time = time;
        this.playerName = name;
        console.log(this.time);

        this.addToDB();
             
        //background
        this.background = document.createElement("back");
        this.background.setAttribute("id", "backend");
        this.background.innerHTML = "Bedankt voor het spelen " + this.playerName + "<br />" + "Je tijd is: " + this.time + " seconden!";
        document.body.appendChild(this.background);
        
        //play again button
        this.playAgain = document.createElement("button");
        this.playAgain.setAttribute("id", "againbutton");
        this.playAgain.innerHTML = "Opnieuw spelen?";
        this.background.appendChild(this.playAgain);
        this.playAgain.addEventListener("click", this.again.bind(this));
        
        //end game button
        this.endGame = document.createElement("button");
        this.endGame.setAttribute("id", "againbutton");
        this.endGame.innerHTML = "Spel stoppen";
        this.endGame.style.marginTop = "350px";
        this.background.appendChild(this.endGame);
        this.endGame.addEventListener("click", this.exit.bind(this));
        
        //highscore
        this.highScore = document.createElement("button");
        this.highScore.setAttribute("id", "againbutton");
        this.highScore.innerHTML = "Highscore";
        this.background.appendChild(this.highScore);
        this.highScore.style.marginTop = "495px";
        this.highScore.addEventListener("click", this.score.bind(this));
    }
    
    private exit(){
        console.log("exit");
        let f = confirm("Close Window?");
        if (f == true) {
            console.log("exit");
            window.close();
        }
        
    }
    
    private again(){
        console.log("again");
        document.body.removeChild(this.background);
        new Startgame(true);
    }
    
    private score() {
        console.log("score");
        window.open("include/highscore.php", '_parent');
        //new highscore();
    }

    private addToDB(){
        $.post("include/names.php", { score: this.time, name: this.playerName});
    }
    
}