import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movie/movies.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  movie: Movie = null;
  image: SafeStyle;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MoviesService, private sanitization: DomSanitizer) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe((result) => {this.movie = result,
      this.movie.background_image = this.movieService.getPosterImg(this.movie.backdrop_path, 1280);
      this.image = this.sanitization.bypassSecurityTrustStyle(`url(` + this.movie.background_image + `)`);
    });
  }

  testuntruc(){
    console.log(this.movie.original_title);
  }

  getPosterImg(imgUrl: string): string {
    return this.movieService.getPosterImg(imgUrl, 342);
  }

}
