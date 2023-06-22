import axios, { AxiosResponse } from "axios";
import { Home, Places } from "../../utils/types";

let URL = `https://safer.onrender.com`;

export const getHomeAPI = async () => {
  try {
    const res: AxiosResponse<Home[]> = await axios.get(`${URL}/homePage`);
    return res.data;
  } catch (err) {}
};

export const getPlacesAPI = async (queryParams?: { params: { _page: number } }) => {
  try {
    const res: AxiosResponse<Places[]> = await axios.get(`${URL}/places`, queryParams);
    return res.data;
  } catch (err) {}
};

export const updatePlacesAPI = async (id: number, payload: { title: string; price: number }) => {
  try {
    const res: AxiosResponse<Places> = await axios.patch(`${URL}/places/${id}`, payload);
    return res.data;
  } catch (err) {}
};
