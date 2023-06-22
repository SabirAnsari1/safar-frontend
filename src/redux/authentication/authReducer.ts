import { AuthAction } from "./action";
import { USER_LOGIN_REQUEST, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../actionTypes";

export interface AuthState {
  isLoading: boolean;
  isError: boolean;
  isAuth: boolean;
  token: string;
}

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  const { type } = action;

  switch (type) {
    case USER_LOGIN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload,
      };
    }

    case USER_LOGIN_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};

export { authReducer };
