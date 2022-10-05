import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface Header {
    name: string,
    display?: string,
    hide?: boolean,
    type?: 'text' | 'button' | 'input' | 'editable'
}

@customElement('app-table')
export class Table extends LitElement {

    static styles = css`
        .table-title {
            font-size: 26px;
        }

        .table-container {
            /* max-width: 500px; */
            padding: 20px;
            border: 2px solid;
            border-radius: 5px;
            margin: 20px;
        }

        .table-desc {
            font-size: 16px;
        }

        th {
            border: 2px solid;
            padding: 5px;
        }

        td {
            border: 1px solid;
            padding: 5px;
        }

        table {
            border-collapse: collapse;
        }

        div {
            padding: 10px;
        }
    `

    @property({attribute:false})
    public data?: []

    @property({attribute: false})
    public tableTitle?: string

    @property({attribute: false})
    public desc?: string

    @property({attribute: false})
    public tableHeaders?: Header[]

    @property({attribute:false})
    public showHeaders?: boolean;



    render() {
        return html`
            <div class="table-container">
                <div ?hidden=${!this.tableTitle} class="table-title">${this.tableTitle}</div>
                <div ?hidden=${!this.desc} class="table-desc">${this.desc}</div>
                <table>
                    <tr ?hidden=${!this.showHeaders}>
                        ${this.tableHeaders?.map(header => html`
                            <th ?hidden=${header.hide}>
                                ${header.display}
                            </th> 
                        `)}
                    </tr>
                                
                    ${this.data?.map(item => html`
                        <tr>
                            ${this.tableHeaders?.map(header => html`
                                <td ?hidden=${header.hide}>
                                    ${item[header.name]}
                                </td>
                            `)}
                        </tr>
                    `)}
                </table>
            </div>
        `;
      }
}