import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './main/nav/nav.component';
import { LandingComponent } from './main/landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FilmComponent } from './main/film/film.component';
import { SpeciesComponent } from './main/species/species.component';
import { CharactersComponent } from './main/characters/characters.component';
import { VehiclesComponent } from './main/vehicles/vehicles.component';
import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { CarouselComponent } from './auth/carousel/carousel.component';
import { FooterComponent } from './main/footer/footer.component';
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
