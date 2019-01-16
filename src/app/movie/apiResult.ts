import { Movie } from './movie';

export class ApiResult {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}
