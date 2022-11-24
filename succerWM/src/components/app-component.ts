import {html, render} from "lit-html"

const appComponentTemplate = html`
    <team-table-component id="table"></team-table-component>
`

class AppComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    connectedCallback() {
        console.log("connected")
        this.render()

    }
    render() {
        render(appComponentTemplate, this.shadowRoot)
        const TeamTableComponent = this.shadowRoot.getElementById("table")
    }
}

customElements.define("app-component", AppComponent)