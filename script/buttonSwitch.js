class ButtonSwitch {
    constructor({ 
        elementSwitch, 
        elementCircle,
        value 
    }) {
        this.elementSwitch = elementSwitch;
        this.elementCircle = elementCircle;
        this.value = value;
    }

    loadButton() {
        switch(this.value) {
            case "light":
            default:
                this.elementCircle.style.left = "20%";
                break;
            case "dark":
                this.elementCircle.style.left = "80%";
                break;
        }
    }
}

export default ButtonSwitch;