import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('nav-bar')
export class NavBar extends LitElement {

    @property({attribute: false})
    navList?: []

    static styles = css`
        a {
            padding: 12px 18px;
            text-decoration: none;
            color: #eeeeee;
            font-weight: 500;
            font-size: 25px;
        }
        div {
            height: 50px;
            background-color: brown;
        }   
        
    `


    render() {
        return html `
            <div>
                ${this.navList?.map(i => html`
                    <a href=${i['path']}>${i['display']}</a>
                `)}
            </div>
        `
    }
};