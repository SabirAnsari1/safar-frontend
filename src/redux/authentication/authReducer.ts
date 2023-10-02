import { loginUser } from "../../utils/types";
import {
  USER_REQUEST,
  USER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT_SUCCESS,
  RESET_REGISTER_INITIALSTATE,
} from "../actionTypes";
import { AuthAction } from "./action";

export interface AuthState {
  isLoading: boolean;
  isError: boolean;
  errMessage: string;
  isAuth: boolean;
  isRegistered: boolean;
  existingUser: loginUser;
  isLogout: boolean;
}

const initialState = {
  isLoading: false,
  isError: false,
  errMessage: "",
  isAuth: false,
  isRegistered: false,
  existingUser: new Object(),
  isLogout: false,
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
        isRegistered: false,
        isLogout: false,
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
        existingUser: action.payload,
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
        isLogout: false,
      };
    }

    case USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        existingUser: new Object(),
        isLogout: true,
      };
    }
    default:
      return state;
  }
};
