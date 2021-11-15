const data = {
    weight: 0,
    height: 0
};

const [ inputAreaHeight, inputAreaWeight ] = inputs;

const inputHeight = inputAreaHeight.children[1];
const inputWeight = inputAreaWeight.children[1];

inputHeight.oninput = ({ target }) => {
    data.height = target.value;
}

inputWeight.oninput = ({ target }) => {
    data.weight = target.value;
}

const arrayColors = [
    {
        name: "--under-weight-color",
        dark: "var(--under-weight-color-dark)",
        light: "var(--under-weight-color-light)",
    },
    {
        name: "--normal-color",
        dark: "var(--normal-color-dark)",
        light: "var(--normal-color-light)",
    },
    {
        name: "--about-weight-color",
        dark: "var(--about-weight-color-dark)",
        light: "var(--about-weight-color-light)",
    },
    {
        name: "--obesity-color",
        dark: "var(--obesity-color-dark)",
        light: "var(--obesity-color-light)",
    },
    {
        name: "--severe-obesity-color",
        dark: "var(--severe-obesity-color-dark)",
        light: "var(--severe-obesity-color-light)",
    },
]

const theme = new ButtonSwitchStyle(arrayColors, {
    elementCircle: circle,
    elementSwitch: switchElement,
    texts: [
        textResult,
        title
    ],
    areaInputs: inputs,
    svgs: [
        iconWeight,
        iconHeight
    ],
    button: buttonCalculate,
    main
});

theme.loadButton();
theme.setStyleTheme(0);

buttonCalculate.onclick = () => {
    const imc = new IMC(data);
    const result = imc.calculateResult().toFixed(1);
    let typeResult = "";

    const conditionalsIMC = {
        thinness: () => {
            if(result < 18.5) {
                typeResult = "Magreza";

                theme.setStyleTheme(result);
            }
        },
        normal: () => {
            if(result >= 18.5 && result <= 24.9) {
                typeResult = "Normal";

                theme.setStyleTheme(result);
            }
        },
        overWeight: () => {
            if(result >= 25.0 && result <= 29.9) {
                typeResult = "Sobrepeso";

                theme.setStyleTheme(result);
            }
        },
        obesity: () => {
            if(result >= 30.0 && result <= 39.9) {
                typeResult = "Obesidade";

                theme.setStyleTheme(result);
            }
        },
        severeObesity: () => {
            if (result >= 40.0){
                typeResult = "Obesidade Grave";
                
                theme.setStyleTheme(result);
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

console.log(theme);