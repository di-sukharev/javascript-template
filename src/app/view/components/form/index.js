import html from "./index.html";
import { Templater } from "../../tools/templater";

// to handle an event we use bubbling. Put listener on upper element and watch e.target.
const form = new Templater({
  html: form,
  name: "tmpl-form",
  handlers: {
    onclick: e => {
      console.log("click", e.target);
    },
    onchange: e => {
      console.log("change", e.target.value);
    }
  }
});

export { signUP };
