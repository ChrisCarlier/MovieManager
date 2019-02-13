import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movie/movies.service';
import { ApiResult } from '../movie/apiResult';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  movieTitleSearch;
  public moviesList: ApiResult;

  constructor(private movieService: MoviesService, private router: Router, private http: HttpClient) {  }

  ngOnInit() {
    // console.log(this.movieTitleSearch);
    // this.getMovieByTitle();
    // console.log('Stored : ' + this.movieService.getSearchTitle());
  }

  getMovieByTitle() {
    if (this.movieTitleSearch !== '') {
      this.movieService.getSearchMovieByTitle(this.movieTitleSearch).subscribe(result => this.moviesList = result);
    }
  }
  onMovieTitleUpdage(event: Event) {
    this.movieTitleSearch = (<HTMLInputElement>event.target).value;
  }

  getPosterImg(imgUrl: string): string {
    return this.movieService.getPosterImg(imgUrl, 154);
  }


  selectMovie(movie: Movie) {
    this.movieService.selectMovie(movie);
  }
}
