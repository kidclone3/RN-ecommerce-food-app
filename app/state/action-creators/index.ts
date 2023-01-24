import { ActionType } from "../action-types";
import { Dispatch } from "react";
import { Action } from "../actions/index";

export const LoginStart = (user: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN_START,
        })
    };
}
export const LoginSuccess = (user: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN_SUCCESS,
            payload: user,
        })
    };
}
export const LoginError = (user: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN_ERROR,
        })
    };
}