import html from "./index.html";
import { Templater } from "../../tools/templater";

const signUP = new Templater({
  html,
  id: "signUP",
  name: "el-signup",
  handlers: {
    onsubmit: e => {
      e.preventDefault();
      console.log("click", e.target);
    },
    onclick: e => {
      console.log("click", e.target);
    },
    onchange: e => {
      console.log("change", e.target.value);
    }
  }
});

export { signUP };
