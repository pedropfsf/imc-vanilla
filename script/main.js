import { 
    switchElement, 
    circle,
    inputHeight,
    inputWeight,
    buttonCalculate,
    textResult
} from './elementsPage.js';
import IMC from './IMC.js';

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

    if(result < 18.5) {
        typeResult = "Magreza";
    } else if(result >= 18.5 && result <= 24.9) {
        typeResult = "Normal";
    } else if(result >= 25.0 && result <= 29.9) {
        typeResult = "Sobrepeso";
    } else if(result >= 30.0 && result <= 39.9) {
        typeResult = "Obesidade;"
    } else {
        typeResult = "Obesidade Grave"
    }
    
    textResult.innerText = `${result} ${typeResult}`;
}
