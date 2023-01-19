import { group } from "console"
import { BehaviorSubject } from "rxjs"//wird verwendet das alle Subscriber den zuletzt geänderten wert bekommen

import {Group, Team} from "./model"
import { RootObject } from "./model"

export interface Model {
    readonly groups: Group[]
    
}

const initialState: Model = {
    groups: []
    
}

const store = new BehaviorSubject<Model>(initialState)

export default store;

