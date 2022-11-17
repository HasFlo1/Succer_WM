import { BehaviorSubject } from "rxjs"
import { Team } from "./team"

export interface Model {
    readonly teams: Team[]
}

const initialState: Model = {
    teams: []
}

const store = new BehaviorSubject<Model>(initialState)

export default store;