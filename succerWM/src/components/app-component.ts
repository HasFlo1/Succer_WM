import {html, render} from "lit-html"
import "./group-table-component"
import store from "../model/store"
import produce from "immer";
import "./team-component"

//Platzhalter wo später html Code Steht
const appComponentTemplate = html`
    <group-table-component id="table"></group-table-component>
    <team-component id="team"></team-component>
`

class AppComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})//Global erreichbar
    }

    connectedCallback() {//standart mäsig vohanden ist wie ein Postconstruct
        console.log("connected")
        this.render()
    }

    render() {
        render(appComponentTemplate, this.shadowRoot)
        const groupTableComponent = this.shadowRoot.getElementById("table")
        const teamComponent = this.shadowRoot.getElementById("team")
        groupTableComponent.addEventListener("team-selected", (e:CustomEvent) => {
            const team = e.detail.team;
            groupTableComponent.style.display = "none"

            /*
            let nextState = produce(store.getValue(), draft => {//für singel source of truth -> immer
                draft.team = team
            })
            */

            console.log("Team selected", team)

            teamComponent.setAttribute("team", team.countryName)
            teamComponent.style.display = "block"
            

            // detail seite anzeigen 
            // table seite ausblenden

            // event an detail seite schickn (mit team daten)
            // in detail seite players durchgehen und rendern
        })

        teamComponent.addEventListener("back", (e: CustomEvent) => {
            groupTableComponent.style.display = "block"
            teamComponent.style.display = "none"
        })
    }
}

customElements.define("app-component", AppComponent)//definiert unsere Klasse als eigene Komponente