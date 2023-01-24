import { ActionType } from "../action-types/index";

interface LoginStartAction {
    type: ActionType.LOGIN_START;
}

interface LoginSuccessAction {
    type: ActionType.LOGIN_SUCCESS;
    payload: any;
}
interface LoginErrorAction {
    type: ActionType.LOGIN_ERROR;
}

export type Action = LoginStartAction | LoginSuccessAction | LoginErrorAction;