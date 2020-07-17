import { Component, OnInit } from '@angular/core';

import { FilmUrls } from 'src/app/filmMetaData';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  films = FilmUrls;
  constructor() {}

  ngOnInit(): void {}

  logout() {
    console.warn('Logging out!');
  }
}
