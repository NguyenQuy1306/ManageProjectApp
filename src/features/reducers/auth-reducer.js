import { toast } from "react-toastify";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage"
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../types/auth-types";

const initialState = {
    user: getUserFromLocalStorage(),
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS: { 
            addUserToLocalStorage({user: 'abc'})
            return { 
                ...state, 
                user: 'abc', 
                loading: false 
            }
        }
        case LOGIN_FAIL: 
        case LOGOUT:
            removeUserFromLocalStorage();
            return {
                ...state,
                user: null,
                loading: false,
            };
        default: 
            return state;
    }
}

export default authReducer