import {html, render} from "lit-html"

import store from "../model/store"
import { Team } from "../model/team"
import teamService from "../team-service"

const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
            <th>countryName</th><th>points</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`
const rowTemplate = (team: Team) => html`
    <td>${team.countryName}</td><td>${team.points}</td>
`

class TeamTableComponent extends HTMLElement {
    private root: ShadowRoot
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "closed" })
    }
    async connectedCallback() {
        store
            .subscribe(model => this.render(model.teams))
        console.log(teamService.fetchTeams())
    }
    private render(teams: Team[]) {
        render(tableTemplate, this.root)
        const body = this.root.querySelector("tbody")
    
        }
    
    
}
customElements.define("team-table-component", TeamTableComponent)

