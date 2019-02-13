import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movie/movies.service';
import { ApiResult } from '../movie/apiResult';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  movieTitleSearch = '';
  public moviesList: ApiResult;

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit() {
  }

  searchMovie() {
    this.movieService.storeSearchTitle(this.movieTitleSearch);
    let link = ['/search-movie/'];
      this.router.navigate(link);
  }

  getMovieByTitle() {
    if (this.movieTitleSearch !== '') {
      console.log('recherche = ' + this.movieTitleSearch);
      this.movieService.getSearchMovieByTitle(this.movieTitleSearch).subscribe(result => this.moviesList = result);
      let link = ['/search-movie/'];
      this.router.navigate(link);
    }
  }
  onMovieTitleUpdage(event: Event) {
    this.movieTitleSearch = (<HTMLInputElement>event.target).value;
  }

}
