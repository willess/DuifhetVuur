/**
 * Screenscore
 */
class EnemiesKilled {
    public deathCount: number = 0;
    public toKillEnemies: number;
    private div: Element;
    private static textFieldButton: HTMLElement;


    constructor(toKillEnemies: number) {
        this.div = document.getElementsByTagName("ui")[0];
        this.toKillEnemies = toKillEnemies;
        console.log("Game start!");
        this.div = document.createElement("score");
        document.body.appendChild(this.div);
    }

    public updateScores() {
        this.deathCount++;
        
        this.div.innerHTML = "Je hebt al " + this.deathCount + " fakkel(s) gedoofd van de " + this.toKillEnemies + "  fakkels!";

        this.isLevelComplete();
    }

    public isLevelComplete(): boolean {
        if (this.deathCount == this.toKillEnemies) {
            console.log("Je hebt het level gehaald!");
            return true;
        }
        return false;
    }
    
    
}