import { View } from "../view";
import { Model } from "../model";

class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
  }
}

export { Controller };
