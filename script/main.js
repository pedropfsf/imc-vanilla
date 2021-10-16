import { 
    switchElement, 
    circle,
    inputHeight,
    inputWeight,
    buttonCalculate,
    textResult,
    saveThemeButton
} from './elementsPage.js';
import IMC from './IMC.js';
import ThemeStyle from './theme.js';

const data = {
    weight: 0,
    height: 0
};

inputHeight.oninput = ({ target }) => {
    data.height = target.value;
}

inputWeight.oninput = ({ target }) => {
    data.weight = target.value;
}

buttonCalculate.onclick = () => {
    const imc = new IMC(data);
    const result = imc.calculateResult().toFixed(1);
    let typeResult = "";

    const conditionalsIMC = {
        thinness: () => {
            if(result < 18.5) {
                typeResult = "Magreza";
            }
        },
        normal: () => {
            if(result >= 18.5 && result <= 24.9) {
                typeResult = "Normal";
            }
        },
        overWeight: () => {
            if(result >= 25.0 && result <= 29.9) {
                typeResult = "Sobrepeso";
            }
        },
        obesity: () => {
            if(result >= 30.0 && result <= 39.9) {
                typeResult = "Obesidade;"
            }
        },
        severeObesity: () => {
            if (result >= 40.0){
                typeResult = "Obesidade Grave"
            }
        }
    }

    conditionalsIMC.thinness();
    conditionalsIMC.normal();
    conditionalsIMC.overWeight();
    conditionalsIMC.obesity();
    conditionalsIMC.severeObesity();
    
    textResult.innerText = `${result} ${typeResult}`;
}

const theme = new ThemeStyle({
    elementCircle: circle,
    elementSwitch: switchElement,
    elementSaveTheme: saveThemeButton
    // value: "dark"
});

theme.loadButton();
// theme.loadTheme();