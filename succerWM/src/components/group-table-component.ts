import {html, render} from "lit-html"

import store from "../model/store"
import { Group } from "../model/group"
import groupService from "../group-service"

const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <table class="w3-table w3-striped w3-bordered">
        <div class="A">
            <table class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group A</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </div>

            <div class="B">
        
            <table class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group B</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
            </div>

            <div class="C">
        
            <table id="1" class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group C</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
            </div>

            <div class="D">
       
            <table class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group D</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
            </div>
`


const rowTemplate = (group: Group) => html`
    <td>${group.group}</td><td>${group.countryName}</td>
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
            if (group.group == "A"){
                const row = body!.insertRow()
                render(rowTemplate(group), row)  
            }
            
              
        })
        const nodes = this.root.getElementById("1")
        render(tableTemplate, nodes)

    }
}
customElements.define("group-table-component", GroupTableComponent)