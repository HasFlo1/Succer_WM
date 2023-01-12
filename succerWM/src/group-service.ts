
import produce from "immer";
import store from "./model/store"
import { Group } from "./model/model";
import { RootObject } from "./model/model";
const url = "https://www.jsonkeeper.com/b/RHHG"
const url2 = "https://www.jsonkeeper.com/b/HV55"

class UserService {
    async fetchUsers() {//asynchrone fetch methode
        const response = await fetch(url2, {//fetch
            mode: "cors"//wegen der Cors poicy
        })
        let root: RootObject = await response.json()//in eine Variable als Json speichern
        let groups = root.group//holt aus json die Gruppen
        let nextState = produce(store.getValue(), draft => {//für singel source of truth -> immer
            draft.groups = groups
        })
        store.next(nextState)
        console.log(groups)
    }
}

const groupService = new UserService()
export default groupService//exportiert groupService