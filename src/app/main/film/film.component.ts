import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';

import { FilmUrls } from '../../filmMetaData';
import { Subscription, Observable } from 'rxjs';
import { People } from 'src/app/models/ghibliApiData';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  // Image data
  films = FilmUrls;
  imageIter = ['1', '2', '3', '4'];
  // api data
  public film;
  public filmData;
  public ret = {
    people: [],
    species: [],
    locations: [],
    vehicles: [],
  };

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.route.params.subscribe((_) => this.ngOnInit());
  }

  ngOnInit() {
    this.film = this.route.snapshot.paramMap.get('name');
    this.ret.people = [];
    this.ret.species = [];
    this.ret.locations = [];
    this.ret.vehicles = [];

    // First set
    this.api.getFilm(this.film).subscribe((data) => {
      // The film
      this.filmData = data[0];
      console.log(`FilmData: `, this.filmData);

      if (this.filmData) {
        // People set
        if (this.filmData.people != 'https://ghibliapi.herokuapp.com/people/') {
          for (let i = 0; i < this.filmData.people.length; i++) {
            this.api.getPeople(this.filmData.people[i]).subscribe((data) => {
              this.ret.people.push(data);
            });
          }
        }

        // Species set
        if (
          this.filmData.species != 'https://ghibliapi.herokuapp.com/species/'
        ) {
          for (let i = 0; i < this.filmData.species.length; i++) {
            this.api.getSpecies(this.filmData.species[i]).subscribe((data) => {
              this.ret.species.push(data);
            });
          }
        }

        // Locations set
        if (
          this.filmData.locations !=
          'https://ghibliapi.herokuapp.com/locations/'
        ) {
          for (let i = 0; i < this.filmData.locations.length; i++) {
            this.api
              .getLocation(this.filmData.locations[i])
              .subscribe((data) => {
                this.ret.locations.push(data);
              });
          }
        }

        // Vehicles set
        if (
          this.filmData.vehicles != 'https://ghibliapi.herokuapp.com/vehicles/'
        ) {
          for (let i = 0; i < this.filmData.vehicles.length; i++) {
            this.api
              .getVehicles(this.filmData.vehicles[i])
              .subscribe((data) => {
                this.ret.vehicles.push(data);
              });
          }
        }
      }
    });
    console.log('return data', this.ret);
  }
}
