import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarouselComponent } from './auth/carousel/carousel.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { NavComponent } from './main/nav/nav.component';
import { LandingComponent } from './main/landing/landing.component';
import { FilmComponent } from './main/film/film.component';
import { CharactersComponent } from './main/characters/characters.component';
import { SpeciesComponent } from './main/species/species.component';
import { VehiclesComponent } from './main/vehicles/vehicles.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: CarouselComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },

  // Auth guarded components     canActivate: [AuthGuard],
  {
    path: 'home',
    component: NavComponent,
    children: [
      { path: '', redirectTo: 'films', pathMatch: 'full' },
      {
        path: 'films',
        component: LandingComponent,
      },
      { path: 'films/:name', component: FilmComponent },
    ],
  },
  { path: 'characters', component: CharactersComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'vehicles', component: VehiclesComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
