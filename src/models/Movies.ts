import { api_key, base } from '../appSettings.json'
import MovieListCategory from './MovieListCategory'

export interface MovieListQueryResult {
  page: number,
  results: {
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number
  }[],
  total_results: number,
  total_pages: number
}

export default class Movies {
  private static async query (method: string, page: number = 1): Promise<MovieListQueryResult> {
    const response = await fetch(`${base}${method}?api_key=${api_key}&page=${page}`)
    return response.json()
  }

  static async list (category: MovieListCategory, page: number = 1): Promise<MovieListQueryResult> {
    switch (category) {
      case MovieListCategory.NowPlaying:
        return this.query('/movie/now_playing', page)
      case MovieListCategory.Popular:
        return this.query('/movie/popular', page)
      case MovieListCategory.TopRated:
        return this.query('/movie/top_rated', page)
      case MovieListCategory.Upcoming:
        return this.query('/movie/upcoming', page)
      default:
        throw new RangeError('Category out of range')
    }
  }
}
