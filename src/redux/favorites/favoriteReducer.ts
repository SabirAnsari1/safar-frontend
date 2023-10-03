import { Places } from "../../utils/types";
import {
  FAVORITE_REQUEST,
  FAVORITE_FAILURE,
  GET_FAVORITES_SUCCESS,
  ADD_FAVORITE_SUCCESS,
  DELETE_FAVORITE_SUCCESS,
  RESET_FAVORITE_INITIALSTATE,
} from "../actionTypes";
import { FavoriteAction } from "./action";

export interface IFavoriteState {
  isLoading: boolean;
  isError: boolean;
  errMessage: string;
  isfavorite: boolean;
  favorites: Places[];
}

const initialState = {
  isLoading: false,
  isError: false,
  errMessage: "",
  isfavorite: false,
  favorites: new Array(),
};

export const favoriteReducer = (
  state: IFavoriteState = initialState,
  action: FavoriteAction
) => {
  switch (action.type) {
    case FAVORITE_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case FAVORITE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMessage: action.payload,
      };
    }

    case GET_FAVORITES_SUCCESS: {
      return { ...state, isLoading: false, favorites: action.payload };
    }

    case ADD_FAVORITE_SUCCESS: {
      return { ...state, isLoading: false, isfavorite: true };
    }

    case DELETE_FAVORITE_SUCCESS: {
      return { ...state, isLoading: false, isError: false };
    }

    case RESET_FAVORITE_INITIALSTATE: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMessage: "",
        isfavorite: false,
      };
    }

    default:
      return state;
  }
};
