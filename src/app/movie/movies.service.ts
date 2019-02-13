import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, from } from 'rxjs';
import { Movie } from '../movie/movie';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieTitleSearch = '';

  constructor(private http: HttpClient, private router: Router) { }

  private baseUrl = 'https://api.themoviedb.org/3';
  private apikey = 'dbc0f41184b1d20c72b889e4e7d96c22';

  getTrending(): Observable<any> {
    let trendingUrl = this.baseUrl + '/trending/movie/day?api_key=' + this.apikey;
    return this.http.get(trendingUrl);
  }

  getMovie(id: number): Observable<any> {
    let getDetailUrl = this.baseUrl + '/movie/' + id + '?api_key=' + this.apikey + '&language=fr-FR';
    return this.http.get(getDetailUrl);
  }

  getPosterImg(imgUrl: string, size: number): string {
    if (imgUrl !== null) {
      // console.log(imgUrl);
      return 'https://image.tmdb.org/t/p/w' + size + '/' + imgUrl;
    }
    return '';
  }

  getMovieVideos(id: number): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=dbc0f41184b1d20c72b889e4e7d96c22&language=fr-FR');
  }

  getSearchMovieByTitle(title: string): Observable<any> {
    let SearchByIdUrl = this.baseUrl + '/search/movie?api_key=' + this.apikey;
    SearchByIdUrl += '&language=fr-FR&query=' + title + '&page=1&include_adult=false';
    return this.http.get(SearchByIdUrl);
  }

  selectMovie(movie: Movie) {
    let link = ['/movie/', movie.id];
    this.router.navigate(link);
  }

  storeSearchTitle(title: string) {
    this.movieTitleSearch = title;
    console.log('Storing : ' + this.movieTitleSearch);
  }

  getSearchTitle(): string {
    return this.movieTitleSearch;
  }
}
