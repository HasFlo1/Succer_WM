import {html, render} from "lit-html"
import "./group-table-component"

const appComponentTemplate = html`
    <group-table-component id="table"></group-table-component>
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
        const groupTableComponent = this.shadowRoot.getElementById("table")
    }
}

customElements.define("app-component", AppComponent)