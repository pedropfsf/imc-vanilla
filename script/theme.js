import ButtonSwitch from './buttonSwitch.js';

class ThemeStyle extends ButtonSwitch {
    constructor(button) {
        super(button);
        // this.color
    }

    loadTheme() {
        switch(this.value) {
            default:
            case "light":
                console.log("light");
                break;
            case "dark":
                console.log("dark");
                break;
        }
    }

    // switchActionTheme({ type, action }) {
    //     switch(type) {
    //         default:
    //         case "light":
    //             action.light();
    //             break;
    //         case "dark":
    //             action.dark();
    //     }
    // }
}

export default ThemeStyle;