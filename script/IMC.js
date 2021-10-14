class IMC {
    constructor({ weight, height }) {
        this.weight = weight;
        this.height = height;
    }

    calculateResult() {
        return this.weight / (this.height * this.height);
    }
}

export default IMC;