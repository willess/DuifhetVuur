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
    private reload: boolean;

    
    constructor(time: number, name: string) {  
        this.reload = true; 
        this.time = time;
        this.playerName = name;

        this.addToDB();

        this.time = time;     
        //background
        this.background = document.createElement("back");
        this.background.setAttribute("id", "backend");
        this.background.innerHTML = "Bedankt voor het spelen naam" + "<br />" + "Je tijd is: " + this.time + " seconden! <br /> Kijk op welke plaats je staat in de highscore lijst!";
        document.body.appendChild(this.background);
        
        //play again button
        this.playAgain = document.createElement("button");
        this.playAgain.setAttribute("id", "againbutton");
        this.playAgain.innerHTML = "Opnieuw spelen?";
        this.background.appendChild(this.playAgain);
        this.playAgain.addEventListener("click", this.again.bind(this));
        
        //highscore
        this.highScore = document.createElement("button");
        this.highScore.setAttribute("id", "againbutton");
        this.highScore.innerHTML = "Highscore";
        this.background.appendChild(this.highScore);
        this.highScore.style.marginTop = "345px";
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
        new Startgame(true, this.reload);
    }
    
    private score() {
        console.log("score");
        window.open("include/highscore.php", '_parent');
    }

    private addToDB(){
        $.post("include/names.php", { score: this.time, name: this.playerName});
        new highscore(this.reload);
    }
    
}