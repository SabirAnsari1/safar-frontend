export interface Home {
  id: number;
  img: string;
  city: string;
  country: string;
  price: number;
  rating: string;
}

export interface Places {
  _id: string;
  id?: number;
  img: string;
  city: string;
  country: string;
  type: string;
  desc: string;
  availability: string;
  price: number;
  review: string;
  rating: string;
}

export interface registerUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
}

export interface loginUser {
  msg: string;
  token: string;
  username: string;
  email: string;
}
