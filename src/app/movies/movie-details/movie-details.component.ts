import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CoordinatesMapWithMessage } from 'src/app/utilities/map/coordinate';
import { MovieGetDTO } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  movie: MovieGetDTO;
  releaseDate: Date;
  trailerURL: SafeResourceUrl;
  coordinates: CoordinatesMapWithMessage[] = [];


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.moviesService.getById(params["id"]).subscribe((movie) => {
        this.movie = movie;
        this.releaseDate = new Date(movie.releaseDate);
        this.trailerURL = this.generateYoutubeURLForEmbeddedVideo(movie.trailer);
        this.coordinates = movie.movieTheaters.map(movieTheater => {
          return {latitude: movieTheater.latitude, longitude: movieTheater.longitude, 
            message: movieTheater.name}
        })
      });
    });
  }

  generateYoutubeURLForEmbeddedVideo(url: any): SafeResourceUrl{
    if (!url){
      return '';
    } 
    // https://www.youtube.com/watch?v=LKFuXETZUsI
    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1){
      videoId = videoId.substring(0, ampersandPosition);
    }

     return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
}
