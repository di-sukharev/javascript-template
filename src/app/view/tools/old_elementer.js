// Elementer returns DOM elements with assigned [handlers]
// todo – change Elementer to more semantic name
class Elementer {
  constructor({ type, id, tmpl, handlers }) {
    this.el = document.createElement(type);
    this.el.id = id;
    this.el.innerHTML = tmpl;
    Object.entries(handlers).forEach(([event, handler]) => {
      this.el[event] = handler;
    });
  }
}

export { Elementer };
