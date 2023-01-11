
import produce from "immer";
import store from "./model/store"
import { Group } from "./model/model";
import { RootObject } from "./model/model";
const url = "https://www.jsonkeeper.com/b/RHHG"
const url2 = "https://www.jsonkeeper.com/b/O59A"

class UserService {
    async fetchUsers() {
        const response = await fetch(url2, {
            mode: "cors"
        })
        let root: RootObject = await response.json()
        let groups = root.group
        let nextState = produce(store.getValue(), draft => {
            draft.groups = groups
        })
        store.next(nextState)
        console.log(groups)
    }
}

const groupService = new UserService()
export default groupService