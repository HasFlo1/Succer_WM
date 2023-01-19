import { group } from "console"
import { html, render } from "lit-html"
import { Module } from "module"
import { Group, Player } from "../model/model"
import { Team } from "../model/model"
import store from "../model/store"
import { mergeMap, filter} from "rxjs"


const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
            <th>Playername</th>
            </tr>
        </thead>
        <tbody></tbody>
        <button id="backbutton" >Back</button>
    </table>
`
const rowTemplate = (player: Player) => html`
    <td>${player.playerName}</td>
`


class TeamComponent extends HTMLElement {
    static get observedAttributes() {
        return ["team"]
    }

    private root: ShadowRoot
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "closed" })
    }

    private team: string
    //Wird aufgerufen wenn sich das Team ändert
    attributeChangedCallback(name: string, oldValue: string, value: string) {
        console.log("TODO: display team", name)

    
        if (name === "team"){
            this.team = value
        }
        
        this.render()
    }


    connectedCallback() {
        this.render()
    }

    private render() {
        store.pipe(mergeMap(group => group.groups), mergeMap(group => group.teams), filter(team => team.countryName === this.team))
        .subscribe(async t => {
            render(tableTemplate, this.root)
            this.root.getElementById("backbutton").onclick = () => {
                    const event = new CustomEvent("back")
                    this.dispatchEvent(event)
                }
            const body = this.root.querySelector("tbody")
            body.innerHTML = ""
            t.player.forEach(p => {
                console.log(p)
                const row = body.insertRow()
                render(rowTemplate(p), row)
            })
        })
        

    }
}

customElements.define("team-component", TeamComponent)