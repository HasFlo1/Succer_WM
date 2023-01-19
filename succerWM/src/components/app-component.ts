import {html, render} from "lit-html"
import "./group-table-component"
import "./team-component"


const appComponentTemplate = html`
    <group-table-component id="table"></group-table-component>
    <team-component id="team"></team-component>
`

class AppComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})//Global erreichbar
    }

    connectedCallback() {
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

            console.log("Team selected", team)

            teamComponent.setAttribute("team", team.countryName)
            teamComponent.style.display = "block"
        })

        teamComponent.addEventListener("back", (e: CustomEvent) => {
            groupTableComponent.style.display = "block"
            teamComponent.style.display = "none"
        })
    }
}

customElements.define("app-component", AppComponent)