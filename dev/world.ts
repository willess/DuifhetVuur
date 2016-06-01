/// <reference path="level1.ts"/>

/**
 * World
 */
class World {
    
    private level:any;
    
    constructor(level: number) {
       
        //maakt levels aan
        switch (level) {
            case 1: this.level = new Level1();
                break;
            case 2: this.level = new Level2();
                break;
            case 3:  this.level = new Level1();
                break;
            case 4: this.level = new Level1();
                break;
            case 5:  this.level = new Level1();
                break;
            default:
                break;
        }
        console.log("test!!!");
        
    }
}