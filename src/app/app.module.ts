import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { LifecycleTestComponent } from './lifecycle-test/lifecycle-test.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { GenresCreateComponent } from './genres/genres-create/genres-create.component';
import { ActorsListComponent } from './actors/actors-list/actors-list.component';
import { ActorsCreateComponent } from './actors/actors-create/actors-create.component';
import { MovieTheaterListComponent } from './movie-theater/movie-theater-list/movie-theater-list.component';
import { MovieTheaterCreateComponent } from './movie-theater/movie-theater-create/movie-theater-create.component';
import { MoviesCreateComponent } from './movies/movies-create/movies-create.component';
import { ActorsEditComponent } from './actors/actors-edit/actors-edit.component';
import { GenresEditComponent } from './genres/genres-edit/genres-edit.component';
import { MovieTheaterEditComponent } from './movie-theater/movie-theater-edit/movie-theater-edit.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MovieTheaterFormComponent } from './movie-theater/movie-theater-form/movie-theater-form.component';
import { MapComponent } from './utilities/map/map.component';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { ActorsAutocompleteComponent } from './actors/actors-autocomplete/actors-autocomplete.component';
import { DisplayErrorsComponent } from './utilities/display-errors/display-errors.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { AuthorizeViewComponent } from './security/authorize-view/authorize-view.component';
import { LoginComponent } from './security/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    LifecycleTestComponent,
    HomeComponent,
    GenresComponent,
    GenresCreateComponent,
    ActorsListComponent,
    ActorsCreateComponent,
    MovieTheaterListComponent,
    MovieTheaterCreateComponent,
    MoviesCreateComponent,
    ActorsEditComponent,
    GenresEditComponent,
    MovieTheaterEditComponent,
    MovieEditComponent,
    NotFoundComponent,
    FormGenreComponent,
    MovieFilterComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MovieTheaterFormComponent,
    MapComponent,
    MovieFormComponent,
    MultipleSelectorComponent,
    ActorsAutocompleteComponent,
    DisplayErrorsComponent,
    MovieDetailsComponent,
    AuthorizeViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    HttpClientModule,
    MarkdownModule.forRoot(),    
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
