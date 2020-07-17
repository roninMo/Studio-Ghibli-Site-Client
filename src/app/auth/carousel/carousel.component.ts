import { Component, OnInit } from '@angular/core';
import { FilmUrls } from 'src/app/filmMetaData';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  filmDirs = FilmUrls;
  constructor() {}

  ngOnInit(): void {
    this.shuffle(this.filmDirs);
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
}
