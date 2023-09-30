import { registerUser } from "../../utils/types";
import {
  USER_REQUEST,
  USER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  RESET_REGISTER_INITIALSTATE,
} from "../actionTypes";
import { AuthAction } from "./action";

export interface AuthState {
  isLoading: boolean;
  isError: boolean;
  errMessage: string;
  isAuth: boolean;
  isRegistered: boolean;
  users: registerUser[];
}

const initialState = {
  isLoading: false,
  isError: false,
  errMessage: "",
  isAuth: false,
  isRegistered: false,
  users: new Array(),
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
) => {
  switch (action.type) {
    case USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
        isRegistered: false,
      };
    }

    case USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isRegistered: false,
        isError: true,
        errMessage: action.payload,
      };
    }

    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        users: action.payload,
      };
    }

    case USER_REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isRegistered: true,
      };
    }

    case RESET_REGISTER_INITIALSTATE: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        isRegistered: false,
        errMessage: "",
      };
    }
    default:
      return state;
  }
};
