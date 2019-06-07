import { LitElement, html } from 'lit-element';

class MyComponent extends LitElement {
  render() {
    return html`
      <p>Hello world!</p>
    `;
  }

  static get properties() {
    return { 
      foo: { type: String },
      num: { type: Number }
    };
  }

  constructor() {
    super();
    this.foo = 'bar';
    this.num = 4;
  }

  sum (a, b) {
    return a + b + this.num;
  }
}

customElements.define('my-component', MyComponent);