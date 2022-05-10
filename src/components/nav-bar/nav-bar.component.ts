import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('nav-bar')
export class NavBar extends LitElement {

    @property({attribute: false})
    navList?: []

    @property({attribute: false})
    loggedIn?: any;
    

    static styles = css`
        a {
            padding: 20px;
            text-decoration: none;
            color: #eeeeee;
            font-weight: 500;
            font-size: 25px;
        }
        div {
            /* height: 30; */
            padding: 20px;
            background-color: brown;
        }
        button {
            color: brown;
            background-color: #eeeeee;
            padding: 0px 20px;
            margin: 10px;
            font-size: 20px;
            height: 30px;
            border-radius: 15px;
            border: none; 
        }   
        
    `
    private _dispatchLoginLogout(){
        this.dispatchEvent(new CustomEvent('loginLogout'));
    }


    render() {
        return html `
            <div>
                ${this.navList?.map(i => (i['auth'] && this.loggedIn) 
                    ? html`<a href=${i['path']}>${i['display']}</a>` 
                    : !i['auth']
                        ? html`<a href=${i['path']}>${i['display']}</a>`
                        : html``
                )}
                <button @click="${this._dispatchLoginLogout}">
                    ${this.loggedIn ? 'LOGOUT' : 'LOGIN'}
                </button>
            </div>
        `
    }
};