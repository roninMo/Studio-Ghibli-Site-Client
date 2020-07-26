import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilmUrls } from 'src/app/filmMetaData';
import { env } from '../../../../environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public loggedIn = env.loggedIn;
  films = FilmUrls;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['/auth']);
  }

  logout() {
    console.warn('Logging out!');
    this.router.navigate(['/auth']);
  }
}
