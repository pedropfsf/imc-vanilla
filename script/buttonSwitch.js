class ButtonSwitch {
    constructor({ 
        elementSwitch, 
        elementCircle
    }) {
        this.elementSwitch = elementSwitch;
        this.elementCircle = elementCircle;
        this._value = window.localStorage.getItem('theme-imc') || "light";
    }

    set value(value) {
        this._value = value;
    }
    get value() {
        return this._value
    }

    loadButton() {
        this.eventsClickButton();
        this.renderButton();
    }

    eventsClickButton() {
        this.elementSwitch.addEventListener('click', () => {
            this.toggleThemeButton();
        }, true)
    }
    
    setTheme(value) {
        window.localStorage.setItem('theme-imc', value);
        this.value = window.localStorage.getItem('theme-imc');
        this.renderButton();
    }

    toggleThemeButton() {
        switch(this.value) {
            case "light":
                this.setTheme("dark");
                break;
            case "dark":
                this.setTheme("light");
                break;
            default:
                return new Error("Action invalidate");
        }
    }

    renderButton() {
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