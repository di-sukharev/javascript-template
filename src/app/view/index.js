import "reset-css";
import "../../css/style.css";
import html from "./index.html";
import { signUP } from "./pages/signup";

// main View class, it assembles all views into one
class View {
  constructor() {
    // todo – compose elemets into each other
    // todo setup rounting
    let el = document.createElement("div");
    el.id = "root";
    el.innerHTML = html;
    console.log(signUP.element);
    this.element = signUP.element;
  }
}

export { View };
