import {html, render} from "lit-html"

import store from "../model/store"
import { Group, Team } from "../model/model"
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
            <tbody id="A">
            </tbody>
        </div>

            <div class="B">
        
            <table class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group B</th>
                </tr>
            </thead>
            <tbody id="B">
            </tbody>
            </div>

            <div class="C">
        
            <table id="1" class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group C</th>
                </tr>
            </thead>
            <tbody  id="C">
            </tbody>
            </div>

            <div class="D">
       
            <table class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group D</th>
                </tr>
            </thead>
            <tbody  id="D">
            </tbody>
            </div>
`


const rowTemplate = (team: Team) => html`
    <td>${team.countryName}</td>
`

class GroupTableComponent extends HTMLElement {

    private root: ShadowRoot
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "closed" })
    }
    async connectedCallback() {
        store
            .subscribe(model => {this.render(model.groups); console.log(model.groups)})
        groupService.fetchUsers()
        
    }
    private render(groups: Group[]) {
        render(tableTemplate, this.root)
        const bodys = this.root.querySelectorAll("tbody")
        groups.forEach(group => {
            group.teams.forEach(team => {
                var body = bodys.forEach(x => {
                    if(x.attributes.getNamedItem("id").value == group.group){
                        const row = x.insertRow()
                        row.onclick=()=>{
                            const event = new CustomEvent("team-selected", {detail: {team}})
                            this.dispatchEvent(event)
                        }
                        render(rowTemplate(team), row) 
                    }
                })
            })
            
            /*const row = body!.insertRow()
            row.addTable
            render(rowTemplate(group), row)*/
            
              
        })
        //const nodes = this.root.getElementById("1")
        //render(tableTemplate, nodes)

    }
}
customElements.define("group-table-component", GroupTableComponent)