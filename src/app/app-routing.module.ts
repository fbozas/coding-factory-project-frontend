import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsCreateComponent } from './actors/actors-create/actors-create.component';
import { ActorsEditComponent } from './actors/actors-edit/actors-edit.component';
import { ActorsListComponent } from './actors/actors-list/actors-list.component';
import { GenresCreateComponent } from './genres/genres-create/genres-create.component';
import { GenresEditComponent } from './genres/genres-edit/genres-edit.component';
import { GenresComponent } from './genres/genres.component';
import { HomeComponent } from './home/home.component';
import { IsAdminGuard } from './is-admin.guard';
import { MovieTheaterCreateComponent } from './movie-theater/movie-theater-create/movie-theater-create.component';
import { MovieTheaterEditComponent } from './movie-theater/movie-theater-edit/movie-theater-edit.component';
import { MovieTheaterListComponent } from './movie-theater/movie-theater-list/movie-theater-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MoviesCreateComponent } from './movies/movies-create/movies-create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';

const routes: Routes = [
 { path: '', component: HomeComponent},

 { path: 'genres', component: GenresComponent, canActivate: [IsAdminGuard]},
 { path: 'genres/create', component: GenresCreateComponent},
 { path: 'genres/edit/:id', component: GenresEditComponent},

 { path: 'actors', component: ActorsListComponent},
 { path: 'actors/create', component: ActorsCreateComponent},
 { path: 'actors/edit/:id', component: ActorsEditComponent},

 { path: 'movietheaters', component: MovieTheaterListComponent},
 { path: 'movietheaters/create', component: MovieTheaterCreateComponent},
 { path: 'movietheaters/edit/:id', component: MovieTheaterEditComponent},

 { path: 'movies/create', component: MoviesCreateComponent},
 { path: 'movies/edit/:id', component: MovieEditComponent},
 { path: 'movies/filter', component: MovieFilterComponent},
 {path: 'movie/:id', component: MovieDetailsComponent},


 {path: 'login', component: LoginComponent},

 { path: 'not-found', component: NotFoundComponent},
 { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
