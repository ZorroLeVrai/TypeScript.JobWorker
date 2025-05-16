import type { NumberCallback } from "./typeDeclaration";

const formElement = document.getElementById("form") as HTMLFormElement;
const inputElement = document.getElementById("input") as HTMLInputElement;
const resultParagraphElement = document.getElementById("result") as HTMLParagraphElement;

export default class View {
  private onSendNumber: NumberCallback;

  constructor(onSendNumber: NumberCallback) {
    this.onSendNumber = onSendNumber;

    formElement.addEventListener("submit", this.handleFormSubmit);
  }

  handleFormSubmit = (submitEvent: SubmitEvent) => {
    submitEvent.preventDefault();
    const numberToCompute = inputElement.valueAsNumber;

    if (!isNaN(numberToCompute)) {
      //resultParagraphElement.textContent = "Computing...";
      this.onSendNumber(numberToCompute);
      inputElement.value = "";
    } else {
      resultParagraphElement.textContent = "Please enter a valid number.";
    }
  }

  updateResult = (result: number) => {
    resultParagraphElement.textContent = `The result is: ${result}`;
  }
}
