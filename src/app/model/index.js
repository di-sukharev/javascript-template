class Model {
  constructor() {
    this.element = document.createElement("div");
    this.element.innerHTML = "i'm the Model";
    this.element.classList.add("model");
  }
}

export { Model };
