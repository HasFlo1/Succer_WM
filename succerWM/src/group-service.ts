
import produce from "immer";
import store from "./model/store"
import { Group } from "./model/model";
import { RootObject } from "./model/model";
const url = "https://www.jsonkeeper.com/b/RHHG"
const url2 = "https://www.jsonkeeper.com/b/HV55"

class DataService {
    async fetchData() {
        const response = await fetch(url2, {
            mode: "cors"
        })
        let root: RootObject = await response.json()//in eine Variable als Json speichern
        let groups = root.group
        let nextState = produce(store.getValue(), draft => {//für single source of truth -> immer
            draft.groups = groups
        })
        store.next(nextState)
        console.log(groups)
    }
}

const groupService = new DataService()
export default groupService//exportiert groupService