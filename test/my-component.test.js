import {
    fixture,
    expect,
    fixtureCleanup,
} from '@open-wc/testing';

import '../src/my-component.js';

describe('Sample test suite', () => {

    afterEach(() => {
        fixtureCleanup();
    });

    it('should instantiate', async () => {
        const el = await fixture('<my-component></my-component>');
        expect(el).to.be.a('HTMLElement');
    });

    it('should render correctly', async () => {
        const el = await fixture('<my-component></my-component>');
        expect(el.shadowRoot.querySelector('p').innerText).to.be.equal('Hello world!');
    });

    it('should work the sum function', async () => {
        const el = await fixture('<my-component></my-component>');
        expect(el.sum(1, 2)).to.equal(7);
    });

    it('should work the sum function with num param', async () => {
        const el = await fixture('<my-component num=1></my-component>');
        expect(el.sum(1, 2)).to.equal(4);
    });

    it('should should have default property', async () => {
        const el = await fixture('<my-component></my-component>');
        expect(el.foo).to.equal("bar");
    });

    it('should set the property', async () => {
        const el = await fixture('<my-component foo="baz"></my-component>');
        expect(el.foo).to.equal("baz");
    });

});