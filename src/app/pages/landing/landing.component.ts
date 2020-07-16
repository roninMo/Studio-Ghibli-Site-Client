import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  // localStorage is a schnazzy function for storing data, up to 5mb, helps with authentication
  constructor() {}

  ngOnInit(): void {}

  films = [
    'Spirited Away',
    'My Neighbor Totoro',
    'Laputa Castle in the Sky',
    'Princess Mononoke',
    'Nausicaa of the Valley of the Wind',
    'Arrietty',
    'From Up On Poppy Hill',
    'Grave of the Fireflies',
    "Howl's Moving Castle",
    "Kiki's Delivery Service",
    'My Neighbors the Yamadas',
    'Ocean Waves',
    'Only Yesterday',
    'Pom Poko',
    'Ponyo',
    'Porco Rosso',
    'Tales From Earthsea',
    'The Cat Returns',
    'The Tale of Princess Kaguya',
    'The Wind Rises',
    'When Marnie Was There',
    'Whisper of the Heart',
  ];
}
