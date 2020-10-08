import {User} from "../../classes/user";

const setUserReducer = (state = {user: new User()}, action: { type: string, user: User }) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}

export default setUserReducer;