import { 
    switchElement, 
    circle,
    iconHeight,
    inputHeight,
    iconWeight,
    inputWeight,
    buttonCalculate,
    textResult,
    title
} from './elementsPage.js';
import IMC from './IMC.js';
import ButtonSwitchStyle from './buttonSwitchStyle.js';

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

const arrayColors = [
    {
        name: "--under-weight-color",
        colorDark: "var(--under-weight-color-dark)",
        colorLight: "var(--under-weight-color-light)",
    },
    {
        name: "--about-weight-color",
        colorDark: "var(--about-weight-color-dark)",
        colorLight: "var(--about-weight-color-light)",
    },
    {
        name: "--normal-color",
        colorDark: "var(--normal-color-dark)",
        colorLight: "var(--normal-color-light)",
    },
    {
        name: "--obesity-color",
        colorDark: "var(--obesity-color-dark)",
        colorLight: "var(--obesity-color-light)",
    },
    {
        name: "--severe-obesity-color",
        colorDark: "var(--severe-obesity-color-dark)",
        colorLight: "var(--severe-obesity-color-light)",
    },
]

const theme = new ButtonSwitchStyle(arrayColors, {
    elementCircle: circle,
    elementSwitch: switchElement,
    
});

theme.loadButton();

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

console.log(iconHeight);
console.log(iconWeight);
console.log(title);