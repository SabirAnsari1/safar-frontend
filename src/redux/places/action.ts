import { Home, Places } from "../../utils/types";
import { AppDispatch } from "../store";
import { getHomeAPI, getPlacesAPI, updatePlacesAPI } from "./api";
import {
  PLACES_REQUEST,
  PLACES_ERROR,
  GET_HOME_SUCCESS,
  GET_PLACES_SUCCESS,
  UPDATE_PLACES_SUCCESS,
} from "../actionTypes";

export interface IPlacesRequest {
  type: typeof PLACES_REQUEST;
}

export interface IPlacesError {
  type: typeof PLACES_ERROR;
}

export interface IGetHomeSuccess {
  type: typeof GET_HOME_SUCCESS;
  payload: Home[];
}

export interface IGetPlacesSuccess {
  type: typeof GET_PLACES_SUCCESS;
  payload: Places[];
}

export interface IUpdatePlaceSuccess {
  type: typeof UPDATE_PLACES_SUCCESS;
}

export type AppAction =
  | IPlacesRequest
  | IPlacesError
  | IGetHomeSuccess
  | IGetPlacesSuccess
  | IUpdatePlaceSuccess;

//action creators
const placesRequest = (): IPlacesRequest => {
  return { type: PLACES_REQUEST };
};

const placesError = (): IPlacesError => {
  return { type: PLACES_ERROR };
};

const getHomeSuccess = (data: Home[]): IGetHomeSuccess => {
  return { type: GET_HOME_SUCCESS, payload: data };
};

const getPlacesSuccess = (data: Places[]): IGetPlacesSuccess => {
  return { type: GET_PLACES_SUCCESS, payload: data };
};

const updatePlacesSuccess = (): IUpdatePlaceSuccess => {
  return { type: UPDATE_PLACES_SUCCESS };
};

export const getHomePage = (): any => async (dispatch: AppDispatch) => {
  try {
    dispatch(placesRequest());
    const res = await getHomeAPI();
    if (res) {
      dispatch(getHomeSuccess(res));
    }
  } catch (error) {
    dispatch(placesError());
  }
};

export const getPlaces =
  (queryParams?: { params: { _page: number; _limit: number; q: string } }): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(placesRequest());
      const res = await getPlacesAPI(queryParams);
      if (res) {
        dispatch(getPlacesSuccess(res));
      }
    } catch (error) {
      dispatch(placesError());
    }
  };

export const updatePlaces =
  (id: number, payload: { title: string; price: number }): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(placesRequest());
      await updatePlacesAPI(id, payload);
      dispatch(updatePlacesSuccess());
    } catch (error) {
      dispatch(placesError());
    }
  };
