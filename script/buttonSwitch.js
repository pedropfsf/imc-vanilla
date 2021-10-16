class ButtonSwitch {
    constructor({ 
        elementSwitch, 
        elementCircle,
        elementSaveTheme,
        childNotification
    }) {
        this.elementSwitch = elementSwitch;
        this.elementCircle = elementCircle;
        this._value = window.localStorage.getItem('theme-imc') || "light";
        this._themeStorage = window.localStorage.getItem('theme-imc') || "light";
        this.elementSaveTheme = elementSaveTheme;
    }

    set value(value) {
        this._value = value;
    }
    get value() {
        return this._value
    }

    set themeStorage(value) {
        this._themeStorage = window.localStorage.setItem('theme-imc', value);
    }
    get themeStorage() {
        return this._themeStorage;
    }

    loadButton() {
        this.eventsClickButton();
    }

    eventsClickButton() {
        this.elementSwitch.addEventListener('click', () => {
            this.toggleThemeButton();
        }, true)
        this.elementSaveTheme.addEventListener('click', () => {
            this.saveThemeStorage();
        }, true);
    }
    
    setTheme(value) {
        this.value = value
        this.renderButton();
    }

    saveThemeStorage() {
        this.themeStorage = this.value;

        let timerAnimation;
        this.elementSaveTheme.style.transform = "scale(1)";
        clearTimeout(timerAnimation);
        timerAnimation = setTimeout(() => {
            this.elementSaveTheme.style.transform = "";
        }, 250);

        this.createNotificationThemeStorage();
    }

    createNotificationThemeStorage() {
        function createArea() {
            const area = window.document.createElement('div');
            area.setAttribute('id', 'window-notification');
            area.style.position = 'absolute';
            area.style.right = '20px';
            area.style.bottom = '20px';
            body.appendChild(area);
        }
        
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