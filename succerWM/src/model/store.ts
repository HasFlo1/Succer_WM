import { BehaviorSubject } from "rxjs"

import {Group} from "./model"
import { RootObject } from "./model"

export interface Model {
    readonly groups: Group[]
}

const initialState: Model = {
    groups: []
}

const store = new BehaviorSubject<Model>(initialState)

export default store;

