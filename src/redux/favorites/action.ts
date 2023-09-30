import axios from "axios";
import { Places } from "../../utils/types";
import {
  DELETE_FAVORITE,
  FAVORITE_FAILURE,
  FAVORITE_REQUEST,
  GET_FAVORITE_SUCCESS,
} from "../actionTypes";
import { AppDispatch } from "../store";

const URL = "https://safer.onrender.com";

export interface IFavRequest {
  type: typeof FAVORITE_FAILURE;
}

export interface IFavError {
  type: typeof FAVORITE_REQUEST;
}
export interface IFavSuccess {
  type: typeof GET_FAVORITE_SUCCESS;
  payload: Places[];
}
export interface IFavDelete {
  type: typeof DELETE_FAVORITE;
}
export type FavoriteAction = IFavRequest | IFavError | IFavSuccess | IFavDelete;

export const getFavdata = () => (dispatch: AppDispatch) => {
  dispatch({ type: FAVORITE_REQUEST });
  axios
    .get(`${URL}/favourite`)
    .then((res) => {
      dispatch({ type: GET_FAVORITE_SUCCESS, payload: res.data });
    })
    .catch(() => dispatch({ type: FAVORITE_FAILURE }));
};

export const postSingleProductItem = (obj: any) => (dispatch: AppDispatch) => {
  dispatch({ type: FAVORITE_REQUEST });
  return axios
    .post(`${URL}/favourite`, obj)
    .then(() => {
      // console.log(res);
    })
    .catch(() => dispatch({ type: FAVORITE_FAILURE }));
};
// export const deleteFav = (data: Places[]) => (dispatch: AppDispatch) => {
//   dispatch({ type: DELETE_FAV, payload: data });
// };

export const deleteFav = (id: number) => (dispatch: AppDispatch) => {
  dispatch({ type: FAVORITE_REQUEST });
  return axios
    .delete(`${URL}/favourite/${id}`)
    .then(() => {
      dispatch({ type: DELETE_FAVORITE });
    })
    .catch(() => {
      dispatch({ type: FAVORITE_REQUEST });
    });
};
