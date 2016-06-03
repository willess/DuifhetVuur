/**
 * Screenscore
 */
class EnemiesKilled {
    private deathCount: number = 0;
    private toKillEnemies: number;
    private div: Element;


    constructor(toKillEnemies: number) {
        this.div = document.getElementsByTagName("ui")[0];
        this.toKillEnemies = toKillEnemies;
        console.log("Game start!");
    }

    public updateScores() {
        this.deathCount++;
        console.log("Je hebt " + this.deathCount + " vijand(en) verslagen!")
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