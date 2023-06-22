import { Home, Places } from "../../utils/types";
import { AppAction } from "./action";
import {
  PLACES_REQUEST,
  PLACES_ERROR,
  GET_HOME_SUCCESS,
  GET_PLACES_SUCCESS,
  UPDATE_PLACES_SUCCESS,
} from "../actionTypes";

export interface IAppState {
  isLoading: boolean;
  isError: boolean;
  home: Home[];
  data: Places[];
}

const initialState = {
  isLoading: false,
  isError: false,
  home: new Array(),
  data: new Array(),
};

const placesReducer = (state: IAppState = initialState, action: AppAction): IAppState => {
  const { type } = action;

  switch (type) {
    case PLACES_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case PLACES_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    case GET_HOME_SUCCESS: {
      return { ...state, isLoading: false, home: action.payload };
    }

    case GET_PLACES_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload };
    }

    case UPDATE_PLACES_SUCCESS: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};

export { placesReducer };
