// this class connects <template's/> to <head>, making them possible to use as simple as <div/>
// todo – change Templater to more semantic name
class Templater {
  // todo – remove [name] param, get it smart from html.firstChild[id]
  constructor({ html, id, name, handlers }) {
    // put [html] markup into <template> tag to pre-render it in the DOM tree before using, its a standart need
    let tmpl = document.createElement("template");
    tmpl.innerHTML = html;
    tmpl.id = id; // id makes tmpl's easy to find in the DOM tree
    document.head.append(tmpl);

    // clone tmpl Node from DOM tree to reuse it multiple times
    let clone = tmpl.content.cloneNode(true);
    // assign event listeners to cloned <template>
    Object.entries(handlers).forEach(([event, handler]) => {
      clone[event] = handler;
    });
    // define custom element with [name]

    customElements.define(
      name,
      class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" }).append(clone);
        }
      }
    );
    // return created custom element
    this.element = document.createElement("div", name);
  }
}

export { Templater };
