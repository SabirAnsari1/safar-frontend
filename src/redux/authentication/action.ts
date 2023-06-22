import { LoginData } from "../../utils/types";
import { AppDispatch } from "../store";
import { userLoginAPI } from "./api";
import { USER_LOGIN_REQUEST, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../actionTypes";

export interface IUserLoginRequest {
  type: typeof USER_LOGIN_REQUEST;
}

export interface IUserLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: string;
}

export interface IUserLoginError {
  type: typeof USER_LOGIN_ERROR;
}

export type AuthAction = IUserLoginError | IUserLoginRequest | IUserLoginSuccess;

const userLoginRequest = (): IUserLoginRequest => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

const userLoginSuccess = (token: string): IUserLoginSuccess => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: token,
  };
};

const userLoginError = (): IUserLoginError => {
  return {
    type: USER_LOGIN_ERROR,
  };
};

export const userLogin =
  (payload: LoginData): any =>
  async (dispatch: AppDispatch) => {
    dispatch(userLoginRequest());
    try {
      let res = await userLoginAPI(payload);
      if (res) {
        dispatch(userLoginSuccess(res));
      }
    } catch (e) {
      dispatch(userLoginError());
    }
  };
