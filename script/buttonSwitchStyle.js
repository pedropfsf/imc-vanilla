class ButtonSwitchStyle {
    constructor(
        theme,
        {
            elementSwitch, 
            elementCircle,
            imc,
            texts, 
            inputs, 
            svgs, 
            button, 
            main
        }
    ) {
        // this._colorDark = colorDark;
        // this._colorLight = colorLight;
        this._theme = theme;
        this.elementSwitch = elementSwitch;
        this.elementCircle = elementCircle;
        this._value = window.localStorage.getItem('theme-imc') || "light";
        this._imc = imc;
        this._texts = texts;
        this._inputs = inputs;
        this._svgs = svgs;
        this._button = button;
        this._main = main;
    }

    set value(value) {
        this._value = value;
    }
    get value() {
        return this._value
    }

    set theme(value) {
        this._theme = value;
    }
    get theme() {
        return this._theme
    }

    set imc(value) {
        this._imc = value;
    }
    get imc() {
        return this._imc;
    }

    set texts(value) {
        this._texts = value;
    }
    get texts() {
        return this._texts;
    }

    set inputs(value) {
        this._inputs = value;
    }
    get inputs() {
        return this._inputs;
    }

    set svgs(value) {
        this._svgs = value;
    }
    get svgs() {
        return this._svgs;
    }

    set button(value) {
        this._button = value;
    }
    get button() {
        return this._button;
    }

    set main(value) {
        this._main = value;
    }
    get main() {
        return this._main;
    }

    // set colorDark(value) {
    //     this._colorDark = value;
    // }

    // get colorDark() {
    //     return this._colorDark;
    // }

    // set colorLight(value) {
    //     this._colorLight = value;
    // }

    // get colorLight() {
    //     return this._colorLight;
    // }

    loadButton() {
        this.eventsClickButton();
        this.renderButton();
    }

    eventsClickButton() {
        this.elementSwitch.addEventListener('click', () => {
            this.toggleThemeButton();
        }, true)
    }
    
    setStyleTheme(imc) {
        const [
            underWeightColor,
            aboutWeightColor,
            normalColor,
            obesityColor,
            severeObesityColor
        ] = this.theme;

        function ifIMCStyle({
            underWeightAction,
            aboutWeightAction,
            normalAction,
            obesityAction,
            severeObesityAction
        }) {
            if(imc < 18.5) {
                underWeightAction();
            } else if(imc >= 18.5 && result <= 24.9) {
                aboutWeightAction();
            } else if(imc >= 25.0 && result <= 29.9) {
                normalAction();
            } else if(imc >= 30.0 && result <= 39.9) {
                obesityAction();
            } else {
                severeObesityAction();
            }
        }

        // function applyDOMElements() {

        // }

        // Utilizando o DOM para aplicar a cor de fundo

        this.actionSwitch({
            value,
            actionLight: () => {

            },
            actionDark: () => {

            }
        });
    }

    setTheme(value) {
        window.localStorage.setItem('theme-imc', value);
        this.value = window.localStorage.getItem('theme-imc');
        this.renderButton();
    }

    toggleThemeButton() {
        this.actionSwitch({
            value: this.value,
            actionLight: () => {
                this.setTheme("dark");
            },
            actionDark: () => {
                this.setTheme("light");
            }
        });
    }

    renderButton() {
        this.actionSwitch({
            value: this.value,
            actionLight: () => {
                this.elementCircle.style.left = "20%";
            },
            actionDark: () => {
                this.elementCircle.style.left = "80%";
            }
        });
    }

    actionSwitch({ 
        value, 
        actionLight, 
        actionDark 
    }) {
        switch(value) {
            case "light":
                actionLight();
                break;
            case "dark":
                actionDark();
                break;
            default:
                return new Error("action invalidate");
        }
    }
}

export default ButtonSwitchStyle;