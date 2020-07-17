import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FilmUrls } from '../../filmMetaData';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  films = FilmUrls;
  imageIter = ['2', '3', '4'];
  public film;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.film = this.route.snapshot.paramMap.get('name');
  }
}
