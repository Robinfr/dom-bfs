import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import bfsDOM from './index';

describe('BFS DOM', () => {
    const dom = new JSDOM(`<div>
        <div class="first-child">
            <div id="a">
                <div class="deep"></div>
            </div>
            <div id="b">B</div>
        </div>
        <div class="second-child">
            <div id="c">C</div>
            <div class="deep"></div>
        </div>
    </div>`);

    it('should return the initial node', () => {
        const startingElement = dom.window.document.querySelector('div') as HTMLElement;
        const returnedElement = bfsDOM(startingElement, element => element.className.length === 0);

        expect(startingElement).to.equal(returnedElement);
    });

    it('should find a child with id c', () => {
        const startingElement = dom.window.document.querySelector('div') as HTMLElement;
        const returnedElement = bfsDOM(startingElement, element => element.id === 'c');

        expect(returnedElement).to.equal(startingElement.querySelector('#c'));
    });

    it('should find the highest-level child with the deep class', () => {
        const startingElement = dom.window.document.querySelector('div') as HTMLElement;
        const returnedElement = bfsDOM(
            startingElement,
            element => element.className === 'deep'
        ) as HTMLElement;

        expect(returnedElement).to.not.equal(startingElement.querySelector('.deep'));
        expect(returnedElement.parentElement).to.equal(
            startingElement.querySelector('.second-child')
        );
    });
});
