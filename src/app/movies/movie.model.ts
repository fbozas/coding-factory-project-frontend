import { ActorMovieDto } from "../actors/actor.model";
import { GenreDto, GenreGetDto } from "../genres/genre.model";
import { MovieTheaterGetDto } from "../movie-theater/movie-theater.model";

export class MovieDTO {
    title: string;
    summary: string;
    poster: File;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genresIds: number[];
    movieTheatersIds: number[];
    actors: ActorMovieDto[];
}

export class MovieGetDTO {
    id: number;
    title: string;
    summary: string;
    poster: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    
    genres: GenreGetDto[];
    movieTheaters: MovieTheaterGetDto[];
    actors: ActorMovieDto[];
}

export class MoviePostGetDTO{
    genres: GenreGetDto[];
    movieTheaters: MovieTheaterGetDto[];
}

export class HomeGetDto {
    inTheaters: MovieGetDTO[];
    upcomingReleases: MovieGetDTO[];
}

export class MoviePutGetDto {
    movie: MovieGetDTO;
    selectedGenres: GenreGetDto[];
    nonSelectedGenres: GenreGetDto[];
    selectedMovieTheaters: MovieTheaterGetDto[];
    nonSelectedMovieTheaters: MovieTheaterGetDto[];
    actors: ActorMovieDto[];
}