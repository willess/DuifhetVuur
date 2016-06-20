/// <reference path="startgame.ts"/>

// hier starten we de applicatie
window.addEventListener("load", function() {

    let reload: boolean = false;
    new Startgame(true, reload);
});