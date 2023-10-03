import {
  USER_REQUEST,
  USER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT_SUCCESS,
  RESET_REGISTER_INITIALSTATE,
} from "../actionTypes";
import axios from "axios";
import { registerUser, loginUser } from "../../utils/types";
import { AppDispatch } from "../store";
import { AiOutlineConsoleSql } from "react-icons/ai";

const URL = "https://safar-server-sabiransari1.onrender.com";

export interface IUserRequest {
  type: typeof USER_REQUEST;
}

export interface IUserFailure {
  type: typeof USER_FAILURE;
  payload: string;
}

export interface IUserLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: loginUser;
}

export interface IUserRegisterSuccess {
  type: typeof USER_REGISTER_SUCCESS;
}

export interface IUserLogoutSuccess {
  type: typeof USER_LOGOUT_SUCCESS;
}

export interface IUserRegisterReset {
  type: typeof RESET_REGISTER_INITIALSTATE;
}

export type AuthAction =
  | IUserRequest
  | IUserFailure
  | IUserLoginSuccess
  | IUserRegisterSuccess
  | IUserLogoutSuccess
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

const userLoginSuccess = (loginUser: loginUser): IUserLoginSuccess => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: loginUser,
  };
};

const userRegisterSuccess = (): IUserRegisterSuccess => {
  return {
    type: USER_REGISTER_SUCCESS,
  };
};

const userLogoutSuccess = (): IUserLogoutSuccess => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

const userRegisterReset = (): IUserRegisterReset => {
  return {
    type: RESET_REGISTER_INITIALSTATE,
  };
};

export const login =
  (loginUser: loginUser) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      const res = await axios.post(`${URL}/users/login`, loginUser);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", JSON.stringify(res.data.token));
    } catch (err: any) {
      dispatch({
        type: USER_FAILURE,
        payload:
          err.response.status === 404 ? err.message : err.response.data.msg,
      });
    }
  };

export const signup =
  (registerUser: registerUser) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      const res = await axios.post(`${URL}/users/register`, registerUser);
      dispatch({ type: USER_REGISTER_SUCCESS });
    } catch (err: any) {
      dispatch({
        type: USER_FAILURE,
        payload:
          err.response.status === 404
            ? err.message
            : err.response.data.error
            ? err.response.data.error
            : err.response.data.msg,
      });
    }
  };

// export const logout = (token: string) => async (dispatch: AppDispatch) => {
//   try {
//     dispatch({ type: USER_REQUEST });
//     const res = await axios.post(`${URL}/users/logout`, {
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${token}`,
//       },
//     });
//     dispatch({ type: USER_LOGOUT_SUCCESS });
//   } catch (err: any) {
//     dispatch({
//       type: USER_FAILURE,
//       payload:
//         err.response.status === 404 ? err.message : err.response.data.msg,
//     });
//   }
// };

export const logout = (token: string) => (dispatch: AppDispatch) => {
  dispatch({ type: USER_REQUEST });
  fetch(`${URL}/users/logout`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: USER_LOGOUT_SUCCESS }))
    .catch((err) =>
      dispatch({
        type: USER_FAILURE,
        payload:
          err.response.status === 404 ? err.message : err.response.data.msg,
      })
    );
};

export const userRegisterResetFunc = (dispatch: AppDispatch) => {
  dispatch({ type: RESET_REGISTER_INITIALSTATE });
};
