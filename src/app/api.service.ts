import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { env } from '../../environment';
import {
  Film,
  People,
  Species,
  Location,
  Vehicles,
} from './models/ghibliApiData';

// Observable models

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: env.token,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public burl = env.ghibliUrl;

  constructor(private http: HttpClient) {}

  getFilm(film: Film): Observable<Film> {
    return this.http.get<Film>(`${this.burl}/films?title=${film}`);
  }

  // direct links from api
  getPeople(person: any): Observable<People> {
    return this.http.get<People>(person);
  }
  getSpecies(species: any): Observable<Species> {
    return this.http.get<Species>(species);
  }
  getLocation(location: any): Observable<Location> {
    return this.http.get<Location>(location);
  }
  getVehicles(vehicles: any): Observable<Vehicles> {
    return this.http.get<Vehicles>(vehicles);
  }
}

/* 
https://ghibliapi.herokuapp.com/

Endpoints: 
  - films
  - people
  - locations
  - species
  - vehicles

  
        - - - - url search parameters - - - -

Film::
  * id
  * title
  * description
  * director
  * producer
  * release_date
  * rt_score
  * people
  * species
  * location
  * vehicles
  * url

People::
  * id
  * name
  * gender
  * age
  * eye_color
  * hair_color
  * films
  * species
  * url

Locations::
  * id
  * name
  * climate
  * terrain
  * surface_water
  * residents
  * films
  * url

Species::
  * id
  * name
  * classifications
  * eye_colors
  * hair_colors
  * url
  * people
  * films

Vehicles::
  * id
  * name
  * description
  * vehicle_class
  * length
  * pilot
  * films
  * url
*/
