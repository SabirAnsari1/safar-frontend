import {
  USER_REQUEST,
  USER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  RESET_REGISTER_INITIALSTATE,
} from "../actionTypes";
import axios from "axios";
import { registerUser, loginUser } from "../../utils/types";
import { AppDispatch } from "../store";

const URL = "https://safar-json-server-sabiransari1.onrender.com";

export interface IUserRequest {
  type: typeof USER_REQUEST;
}

export interface IUserFailure {
  type: typeof USER_FAILURE;
  payload: string;
}

export interface IUserLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: registerUser[];
}

export interface IUserRegisterSuccess {
  type: typeof USER_REGISTER_SUCCESS;
}

export interface IUserRegisterReset {
  type: typeof RESET_REGISTER_INITIALSTATE;
}

export type AuthAction =
  | IUserRequest
  | IUserFailure
  | IUserLoginSuccess
  | IUserRegisterSuccess
  | IUserRegisterReset;

const userRequest = (): IUserRequest => {
  return {
    type: USER_REQUEST,
  };
};

const userError = (errMessage: string): IUserFailure => {
  return {
    type: USER_FAILURE,
    payload: errMessage,
  };
};

const userLoginSuccess = (registerUser: []): IUserLoginSuccess => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: registerUser,
  };
};

const userRegisterSuccess = (): IUserRegisterSuccess => {
  return {
    type: USER_REGISTER_SUCCESS,
  };
};

const userRegisterReset = (): IUserRegisterReset => {
  return {
    type: RESET_REGISTER_INITIALSTATE,
  };
};

export const login = async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: USER_REQUEST });
    const res = await axios.get(`${URL}/users`);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (err: any) {
    dispatch({ type: USER_FAILURE, payload: err.message });
  }
};

export const signup =
  (registerUser: registerUser) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      const res = await axios.post(`${URL}/users`, registerUser);
      dispatch({ type: USER_REGISTER_SUCCESS });
    } catch (err: any) {
      dispatch({ type: USER_FAILURE, payload: err.message });
    }
  };

export const userRegisterResetFunc = (dispatch: AppDispatch) => {
  dispatch({ type: RESET_REGISTER_INITIALSTATE });
};
