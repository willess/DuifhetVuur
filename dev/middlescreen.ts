/**
 * middleScreen
 */
class middleScreen {

    private middle: HTMLElement;
    private text: HTMLElement;
    public level: string;
    public count: number = 10;
    private timer: number;
    private skip: HTMLElement;


    constructor(level: string) {

        this.middle = document.createElement("middlescreen");
        this.middle.setAttribute("id", "middle-screen");
        this.middle.innerHTML = "" + level + " uitgespeeld!" + "<br />" + "Je score is score";
        document.body.appendChild(this.middle);

        this.text = document.createElement("nexttext");
        this.text.setAttribute("id", "next-text");
        this.text.innerHTML = "Het volgende level begint over " + this.count;
        document.body.appendChild(this.text);

        this.skip = document.createElement('button');
        this.skip.setAttribute("id", "skip-button");
        this.skip.innerHTML = "Overslaan";
        document.body.appendChild(this.skip);
        this.skip.addEventListener("click", this.skipButton.bind(this));



        this.timer = setInterval(this.counter.bind(this), 1000);

    }

    public counter() {
        this.count--;
        console.log(this.count);

        if (this.count == 0) {
            console.log("volgende");
            clearInterval(this.timer);
            document.body.removeChild(this.middle);
            document.body.removeChild(this.text);
        }
        this.text.innerHTML = "Het volgende level begint over " + this.count;

    }

    public skipButton() {
        document.body.removeChild(this.middle);
        document.body.removeChild(this.text);
        document.body.removeChild(this.skip);
        clearInterval(this.timer);
    }

}