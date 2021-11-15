class IMC {
    constructor({ weight = 0, height = 0 }) {
        this.weight = weight;
        this.height = height;
    }

    calculateResult() {
        let result = this.weight / (this.height * this.height);
        if(isNaN(result)) {
            result = 0;
        }
        console.log(result);

        return result;
    }
}