import { group } from "console"
import { BehaviorSubject } from "rxjs"//wird verwendet das alle Subscriber den zuletzt geänderten wert bekommen

import {Group, Team} from "./model"
import { RootObject } from "./model"

export interface Model {
    readonly groups: Group[], //kann gruppen nur lesn
    
}

const initialState: Model = {
    groups: []//deault statment -> Arrayliste die leer ist
    
}

const store = new BehaviorSubject<Model>(initialState)//intialisiert den Store

export default store;//Exportiert Store

