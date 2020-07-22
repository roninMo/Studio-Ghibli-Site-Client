import { Component, OnInit } from '@angular/core';

import { env } from '../../../../environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public loggedIn = env.loggedIn;

  constructor() {}

  ngOnInit(): void {}

  logout() {
    console.warn('Logging out!');
  }
}
