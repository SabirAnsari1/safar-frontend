import { Places } from "../../utils/types";
import {
  DELETE_FAVORITE,
  FAVORITE_FAILURE,
  FAVORITE_REQUEST,
  GET_FAVORITE_SUCCESS,
} from "../actionTypes";
import { FavoriteAction } from "./action";

export interface IFavoriteState {
  isLoading: boolean;
  isError: boolean;
  favorite: Places[];
}
const initialState = {
  isLoading: false,
  isError: false,
  favorite: new Array(),
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
      return { ...state, isLoading: false, isError: true };
    }

    case GET_FAVORITE_SUCCESS: {
      return { ...state, isLoading: false, favorite: action.payload };
    }

    case DELETE_FAVORITE: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};
