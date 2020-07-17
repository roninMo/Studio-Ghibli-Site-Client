import { Component, OnInit } from '@angular/core';

import { FilmUrls } from 'src/app/filmMetaData';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  // localStorage is a schnazzy function for storing data, up to 5mb, helps with authentication
  films = FilmUrls;

  constructor() {}

  ngOnInit(): void {}
}
