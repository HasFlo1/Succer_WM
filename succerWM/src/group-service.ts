
import produce from "immer";
import store from "./model/store"
import { Group } from "./model/group";
const url = "https://www.jsonkeeper.com/b/RHHG"

class UserService {
    async fetchUsers() {
        const response = await fetch(url)
        let groups: [Group] = await response.json()
        let nextState = produce(store.getValue(), draft => {
            draft.groups = groups
        })
        store.next(nextState)
        console.log(groups)
    }
}

const groupService = new UserService()
export default groupService