import View from "./view";

export default class Controller {
  private view: View;
  private worker: Worker | null = null;

  constructor() {
    this.view = new View(this.handleSendNumber);
    this.worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
    this.worker.onmessage = (event: MessageEvent<number>) => {
      this.view.updateResult(event.data);
    };
  }

  private handleSendNumber = (number: number) => {
    this.worker?.postMessage(number);
  }

  // private compute = (n: number): number => {
  //   let result = 0;
  //   const iterations = n * 1000000; // Adjust multiplier for desired intensity

  //   for (let i = 0; i < iterations; i++) {
  //     result += Math.sin(i * Math.random());
  //   }

  //   return result;
  // }
}