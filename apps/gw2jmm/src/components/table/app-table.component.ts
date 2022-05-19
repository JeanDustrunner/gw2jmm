import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('app-table')
export class Table extends LitElement {

    static styles = css`
        :host {
            color: blue;
        }
    `

@property()
name?: string = 'World';

// Render the UI as a function of component state
// render() {
//   return html`<p>Hello, ${this.name}!</p>`;
// }

    @property({type: []})
    set data(data: []) {
        const oldValue = this._data;
        this._data = data;
        this.requestUpdate('data', oldValue);
    }

    private _data?: [];

    connectedCallback(): void {
        console.log(this._data);
    }

    // render() {
    //     return html `
            // <div>
            //     ${this.data?.map(item => {
            //         html`<div>${item}</div>`
            //     })}
            // </div>
    //     `
    // }
    // <!-- ${this.data?.map(item => {
    //     html`<div>${item['key']}</div>`
    // })} -->

    render() {
        return html`
            <div>
                ${this._data?.map(i => {
                    html`<div>${i['key']}</div>`
                })}
               
            </div>
        `;
      }
}