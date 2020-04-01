import { Controller } from "./app";

let app = new Controller();
document.body.appendChild(app.view.element);

if (module.hot) {
  console.log("=== MODULE HOT START ===");
  module.hot.accept("./app", () => {
    document.body.remove(app.view.element);
    app = new Controller();
    document.body.append(app.view.element);
  });
}
