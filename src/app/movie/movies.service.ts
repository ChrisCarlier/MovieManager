import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, from } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { MovieVideo } from './movieVideo';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apikey: string = 'dbc0f41184b1d20c72b889e4e7d96c22';

  getTrending(): Observable<any> {
    let trendingUrl = this.baseUrl + '/trending/movie/day?api_key=' + this.apikey;
    return this.http.get(trendingUrl);
  }

  getMovie(id: number): Observable<any> {
    let getDetailUrl = this.baseUrl + '/movie/' + id + '?api_key=' + this.apikey + '&language=fr-FR';
    return this.http.get(getDetailUrl);
  }

  getPosterImg(imgUrl: string, size: number): string {
    return 'https://image.tmdb.org/t/p/w' + size + '/' + imgUrl;
  }

  getMovieVideos(id: number): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=dbc0f41184b1d20c72b889e4e7d96c22&language=fr-FR');
  }
}
