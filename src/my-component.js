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
    // Always call super() first
    super();
    this.foo = 'bar';
    this.num = 4;
  }

  sum(a, b) {
    return a + b + this.num;
  }

  substract(a, b) {
    return (a - b);
  }
}

customElements.define('my-component', MyComponent);