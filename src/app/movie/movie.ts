export class Movie {
    id: number;
    vote_average: number;
    title: string;
    vote_count: number;
    video: boolean;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: Date;

    constructor(id: number, title: string, vote_average: number) {
        this.id = id;
        this.title = title;
        this.vote_average = vote_average;
     }
}
