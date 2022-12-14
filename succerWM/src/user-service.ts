
import produce from "immer";
import store from "./model/store"
import { User } from "./model/user";
const url = "https://www.jsonkeeper.com/b/RHHG"

class UserService {
    async fetchUsers() {
        //const response = await fetch(url, {
            //mode: 'cors',
            //headers: {
              //'Access-Control-Allow-Origin':'*',
              //'Access-Control-Allow-Credentials': 'true'
           // }
         // })
        const response = await fetch(url)
        let users: [User] = await response.json()
        let nextState = produce(store.getValue(), draft => {
            draft.users = users
        })
        store.next(nextState)
        console.log(users)
    }
}

const userService = new UserService()
export default userService