import {html, render} from "lit-html"
import "./group-table-component"
//Platzhalter wo später html Code Steht
const appComponentTemplate = html`
    <group-table-component id="table"></group-table-component>
`

class AppComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})//Golbal erreichbar
    }
    connectedCallback() {//standart mäsig vohanden ist wie ein Postconstruct
        console.log("connected")
        this.render()

    }
    render() {
        render(appComponentTemplate, this.shadowRoot)
        const groupTableComponent = this.shadowRoot.getElementById("table")
        groupTableComponent.addEventListener("team-selected", (e:CustomEvent) => {
            const team = e.detail.team;
            console.log(team)

            // detail seite anzeigen 
            // table seite ausblenden

            // event an detail seite schickn (mit team daten)
            // in detail seite players durchgehen und rendern
        })
    }
}

customElements.define("app-component", AppComponent)//definiert unsere Klasse als eigene Komponente