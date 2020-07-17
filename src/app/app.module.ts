import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FilmComponent } from './pages/film/film.component';
import { SpeciesComponent } from './pages/species/species.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CarouselComponent } from './auth/carousel/carousel.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    FilmComponent,
    SpeciesComponent,
    CharactersComponent,
    VehiclesComponent,
    HomeComponent,
    PageNotFoundComponent,
    CarouselComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
