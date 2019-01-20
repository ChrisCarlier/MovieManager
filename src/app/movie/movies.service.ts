import { Injectable } from '@angular/core';
import { ApiResult } from '../movie/apiResult';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, from } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  
  private baseUrl: string = 'https://api.themoviedb.org/3';
  // private trendingUrl: string = this.baseUrl + '/discover/movie?api_key=dbc0f41184b1d20c72b889e4e7d96c22&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
  private trendingUrl: string = this.baseUrl + '/trending/movie/day?api_key=dbc0f41184b1d20c72b889e4e7d96c22';
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
    
    // this.apires = <ApiResult><unknown>this.http.get(this.baseUrl);
    // return this.apires;
    // console.log(this.http.get(this.baseUrl));
    return this.http.get(this.trendingUrl);
  }

  getImage(imgUrl: string): void {
    // return this.http.get(this.baseUrl + imgUrl);
  }
}
