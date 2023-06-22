export interface Home {
  id: number;
  img: string;
  city: string;
  country: string;
  price: number;
  rating: string;
}

export interface Places {
  id: number;
  img: string;
  city: string;
  country: string;
  type: string;
  desc: string;
  availability: string;
  price: number;
  review: string;
  rating: string;
  host: string;
  hostImg: string;
  yOh: string;
  hostTag: string;
}

export interface LoginData {
  email: string;
  password: string;
}
