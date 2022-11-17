import { Console } from "console"
import produce from "immer"
import store from "./model/store"
import { Team } from "./model/team"
const url = "https://jsonkeeper.com/b/TCRV"

class TeamService {
    async fetchTeams() {
        const response = await fetch(url)
        let teams: [Team] = await response.json()
        let nextState = produce(store.getValue(), draft => {
            draft.teams = teams
        })
        store.next(nextState)
    }
    
}

const teamService = new TeamService()
export default teamService

