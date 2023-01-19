import {html, render} from "lit-html"

import store from "../model/store"
import { Group, Team } from "../model/model"
import groupService from "../group-service"
//Template
const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <table class="w3-table w3-striped w3-bordered">
        <div class="A">
            <table style="table-layout: fixed" class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group A</th>
                </tr>
            </thead>
            <tbody id="A">
            </tbody>
        </div>

            <div class="B">
            <table style="table-layout: fixed" class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group B</th>
                </tr>
            </thead>
            <tbody id="B">
            </tbody>
            </div>

            <div class="C">
        
            <table style="table-layout: fixed" class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group C</th>
                </tr>
            </thead>
            <tbody  id="C">
            </tbody>
            </div>

            <div class="D">
            <table style="table-layout: fixed" class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group D</th>
                </tr>
            </thead>
            <tbody  id="D">
            </tbody>
            </div>

            <div class="E">
            <table style="table-layout: fixed" class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group E</th>
                </tr>
            </thead>
            <tbody  id="E">
            </tbody>
            </div>

            <div class="F">
            <table style="table-layout: fixed" class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group F</th>
                </tr>
            </thead>
            <tbody  id="F">
            </tbody>
            </div>

            <div class="G">
            <table style="table-layout: fixed" class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group G</th>
                </tr>
            </thead>
            <tbody  id="G">
            </tbody>
            </div>

            <div class="H">
            <table style="table-layout: fixed" class="w3-table w3-striped w3-bordered">
            <thead>
                <tr>
                    <th>Group H</th>
                </tr>
            </thead>
            <tbody  id="H">
            </tbody>
            </div>
`

const rowTemplate = (team: Team) => html`
    <td><img src=${team.image} alt=${team.image} width="100"></td>
    <td>${team.countryName}</td>
    <td>${team.points}</td>
`

class GroupTableComponent extends HTMLElement {

    private root: ShadowRoot
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "closed" })
    }

    async connectedCallback() {
        store.subscribe(model => {this.render(model.groups); console.log(model.groups)})
        groupService.fetchData()
    }

    private render(groups: Group[]) {
        render(tableTemplate, this.root)
        const bodys = this.root.querySelectorAll("tbody")
        groups.forEach(group => {
            group.teams.forEach(team => {
                bodys.forEach(x => {
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
              
        })

    }
}

customElements.define("group-table-component", GroupTableComponent)//eigene Komponente