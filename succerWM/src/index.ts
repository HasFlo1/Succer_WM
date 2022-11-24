import teamService from "./team-service"

const body = document.querySelector("body")
const appComponent = document.createElement("app-component")
body.appendChild(appComponent)

console.log(teamService.fetchTeams())