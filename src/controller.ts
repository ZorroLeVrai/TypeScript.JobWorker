import View from "./view";

export default class Controller {
  private view: View;

  constructor() {
    this.view = new View(this.handleSendNumber);
  }

  private handleSendNumber = (number: number) => {
    const result = this.compute(number);
    this.view.updateResult(result);
  }

  private compute = (n: number): number => {
    let result = 0;
    const iterations = n * 1000000; // Adjust multiplier for desired intensity

    for (let i = 0; i < iterations; i++) {
      result += Math.sin(i * Math.random());
    }

    return result;
  }
}