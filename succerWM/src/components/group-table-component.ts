import {html, render} from "lit-html"

import store from "../model/store"
import { Group } from "../model/group"
import groupService from "../group-service"

const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
            <th>Group</th><th>Team</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`
const rowTemplate = (group: Group) => html`
    <td>${group.group}</td><td>${group.group}</td>
`
class GroupTableComponent extends HTMLElement {

    private root: ShadowRoot
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "closed" })
    }
    async connectedCallback() {
        store
            .subscribe(model => this.render(model.groups))
        groupService.fetchUsers()
    }
    private render(groups: Group[]) {
        render(tableTemplate, this.root)
        const body = this.root.querySelector("tbody")
        groups.forEach(group => {
            const row = body!.insertRow()
            row.addTable
            render(rowTemplate(group), row)
        })
    }
}
customElements.define("group-table-component", GroupTableComponent)