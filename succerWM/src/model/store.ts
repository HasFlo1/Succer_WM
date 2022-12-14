import { BehaviorSubject } from "rxjs"

import {Group} from "./group"

export interface Model {
    readonly groups: Group[]
}

const initialState: Model = {
    groups: []
}

const store = new BehaviorSubject<Model>(initialState)

export default store;

