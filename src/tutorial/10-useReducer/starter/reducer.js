import {CLEAR_LIST, REMOVE_ITEM, RESET_LIST} from "./actions.js";
import {data} from "../../../data.js";
//this function takes the previous state and action and returns the new state
//the action is a dispatch
const reducer = (state, action) => {
    console.log(action)
    if (action.type === CLEAR_LIST) {
        return {...state, people: []}
    }
    if (action.type === RESET_LIST) {
        return {...state, people: data}
    }
    if (action.type === REMOVE_ITEM) {
        return {
            ...state,
            people: state.people.filter((person) => person.id !== action.payload.id)
        }
    }
    throw new Error("error -" + action.type + "-")
}

export default reducer;