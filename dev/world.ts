/// <reference path="level.ts"/>

/**
 * World
 */
class World {
    
    //declare levels
    private level1 : Level;
    private level2 : Level;
    private level3 : Level;
    private level4 : Level;
    private level5 : Level;
    
    constructor(level) {
        
        //maakt levels aan
        switch (level) {
            case 1: this.level1 = new Level(level, "level1");
                break;
            case 2: this.level2 = new Level(level, "level2");
                break;
            case 3: this.level3 = new Level(level, "level3");
                break;
            case 4: this.level4 = new Level(level, "level4");
                break;
            case 5: this.level5 = new Level(level, "level5");
                break;
            default:
                break;
        }
        console.log("test!!!");
        
    }
}