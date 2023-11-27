import { toast } from "react-toastify";
import AuthAPI from "../services/auth-service";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../types/auth-types";

export const login = (username, password) => async (dispatch) => {
    try {
        // const res = await AuthAPI.login(username, password);

        // console.log(res.data);

        dispatch({
            type: LOGIN_SUCCESS,
            // payload: res.data,
        });
        toast.success('Chào mừng bạn trở lại')
    } catch (err) {
        // const errors = err.response.data.errors;
        // console.log(err.response.data);
        // if (errors) {
        //     errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        // }

        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
};