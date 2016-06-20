/**
 * Screenscore
 */
class EnemiesKilled {
    public deathCount: number = 0;
    public toKillEnemies: number;
    public div: Element;
    private static textFieldButton: HTMLElement;

    public totalScore: number = 0;


    constructor(toKillEnemies: number) {
        this.div = document.getElementsByTagName("ui")[0];
        this.toKillEnemies = toKillEnemies;
        this.div = document.createElement("score");
        document.body.appendChild(this.div);
        this.div.innerHTML ="Vuren gedoofd: "+ this.deathCount + "/" + this.toKillEnemies;

    }

    public updateScores() {
        this.deathCount++;
        
        this.div.innerHTML ="Vuren gedoofd: "+ this.deathCount + "/" + this.toKillEnemies;
        this.totalScore = this.totalScore + 1;
        this.isLevelComplete();
        // console.log(this.totalScore);
    }

    public isLevelComplete(): boolean {
        if (this.deathCount == this.toKillEnemies) {
            this.div.innerHTML ="Vuren gedoofd: 0/" + this.toKillEnemies;
            return true;
        }
        return false;
    }
}