export interface Film {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  rt_score: string;
  people?: string[];
  species?: string[];
  location?: string[];
  vehicles?: string[];
  url: string;
}

export interface People {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  films?: string[];
  species: string;
  url: string;
}

export interface Location {
  id: string;
  name: string;
  climate: string;
  surface_water: string;
  redients?: string[];
  films?: string[];
  url?: string[];
}

export interface Species {
  id: string;
  name: string;
  classification: string;
  eye_color: string;
  hair_color: string;
  people?: string[];
  films?: string[];
  ur: string;
}

export interface Vehicles {
  id: string;
  name: string;
  description: string;
  vehicle_class: string;
  length: string;
  pilot: string;
  films: string;
  url: string;
}
