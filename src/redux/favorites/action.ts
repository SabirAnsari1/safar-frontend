import axios from "axios";
import { Places } from "../../utils/types";
import {
  FAVORITE_REQUEST,
  FAVORITE_FAILURE,
  GET_FAVORITES_SUCCESS,
  ADD_FAVORITE_SUCCESS,
  DELETE_FAVORITE_SUCCESS,
  RESET_FAVORITE_INITIALSTATE,
} from "../actionTypes";
import { AppDispatch } from "../store";

const URL = "https://safar-server-sabiransari1.onrender.com";

export interface IFavoriteRequest {
  type: typeof FAVORITE_REQUEST;
}

export interface IFavoriteError {
  type: typeof FAVORITE_FAILURE;
  payload: string;
}
export interface IFavoriteGetSuccess {
  type: typeof GET_FAVORITES_SUCCESS;
  payload: Places[];
}

export interface IFavoriteAddSuccess {
  type: typeof ADD_FAVORITE_SUCCESS;
}

export interface IFavoriteDeleteSuccess {
  type: typeof DELETE_FAVORITE_SUCCESS;
}

export interface IFavoriteResetInitialstate {
  type: typeof RESET_FAVORITE_INITIALSTATE;
}

export type FavoriteAction =
  | IFavoriteRequest
  | IFavoriteError
  | IFavoriteGetSuccess
  | IFavoriteAddSuccess
  | IFavoriteDeleteSuccess
  | IFavoriteResetInitialstate;

// export const getFavoritesPlaces = (dispatch: AppDispatch) => {
//   dispatch({ type: FAVORITE_REQUEST });
//   axios
//     .get(`${URL}/favourites/favouritesplaces`)
//     .then((res) => {
//       dispatch({ type: GET_FAVORITES_SUCCESS, payload: res.data });
//     })
//     .catch((err) => dispatch({ type: FAVORITE_FAILURE, payload: err.message }));
// };

export const getFavoritesPlaces = (dispatch: AppDispatch) => {
  dispatch({ type: FAVORITE_REQUEST });
  fetch(`${URL}/favourites/favouritesplaces`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: GET_FAVORITES_SUCCESS, payload: res });
    })
    .catch((err) => dispatch({ type: FAVORITE_FAILURE, payload: err.message }));
};

// export const addFavoritePlace = (_id: string) => (dispatch: AppDispatch) => {
//   dispatch({ type: FAVORITE_REQUEST });
//   axios
//     .post(`${URL}/favourites/addtofavourite`, { _id })
//     .then(() => {
//       dispatch({ type: ADD_FAVORITE_SUCCESS });
//     })
//     .catch((err) => dispatch({ type: FAVORITE_FAILURE, payload: err.message }));
// };

export const addFavoritePlace = (_id: string) => (dispatch: AppDispatch) => {
  dispatch({ type: FAVORITE_REQUEST });
  fetch(`${URL}/favourites/addtofavourite/${_id}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: ADD_FAVORITE_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: FAVORITE_FAILURE, payload: err.message });
    });
};

// export const deleteFavoritePlace = (_id: string) => (dispatch: AppDispatch) => {
//   dispatch({ type: FAVORITE_REQUEST });
//   axios
//     .delete(`${URL}/favourites/deletefavourite/${_id}`)
//     .then(() => {
//       dispatch({ type: DELETE_FAVORITE_SUCCESS });
//     })
//     .catch((err) => {
//       dispatch({ type: FAVORITE_FAILURE, payload: err.message });
//     });
// };

export const deleteFavoritePlace = (_id: string) => (dispatch: AppDispatch) => {
  dispatch({ type: FAVORITE_REQUEST });
  return fetch(`${URL}/favourites/deletefavourite/${_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  })
    .then((res) => res.json())
    .then(() => {
      dispatch({ type: DELETE_FAVORITE_SUCCESS });
    })
    .catch((err) => dispatch({ type: FAVORITE_FAILURE, payload: err.message }));
};

export const favoriteResetFunc = (dispatch: AppDispatch) => {
  dispatch({ type: RESET_FAVORITE_INITIALSTATE });
};
