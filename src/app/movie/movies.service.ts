import { Injectable } from '@angular/core';
import { ApiResult } from '../movie/apiResult';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, from } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apikey: string = 'dbc0f41184b1d20c72b889e4e7d96c22';
  private apires: ApiResult;
  private reponse: Response;

  private log(log: string) {
    console.log(log);
  }
  private handleError<T>(Operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${Operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getTest(): void {
    this.apires = <ApiResult><unknown>this.http.get(this.baseUrl);
    console.log(this.http.get(this.baseUrl));
  }

  getTrending(): Observable<any> {
    let trendingUrl = this.baseUrl + '/trending/movie/day?api_key=' + this.apikey;
    return this.http.get(trendingUrl);
  }

  getMovie(id: number): Observable<any> {
    let getDetailUrl = this.baseUrl + '/movie/'+ id +'?api_key=' + this.apikey + '&language=fr-FR';
    return this.http.get(getDetailUrl);
  }

  getPosterImg(imgUrl: string, size: number): string {
    return 'https://image.tmdb.org/t/p/w' + size + '/' + imgUrl;
  }
}
