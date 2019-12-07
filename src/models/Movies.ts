import { api_key, base } from '../appSettings.json'
import MovieListCategory from './MovieListCategory'
import MovieResultObject from './MovieResultObject.js'

export interface MovieQueryResult {
  page: number,
  results: MovieResultObject[],
  total_results: number,
  total_pages: number
}

export interface QueryParams {
  page?: number,
  query?: string
}

export default class Movies {
  private static async query (method: string, params: QueryParams): Promise<MovieQueryResult> {
    const response = await fetch(`${base}${method}?${Object.entries({
      api_key, ...params
    }).map(x => x.join('=')).join('&')}`)
    return response.json()
  }

  static async list (category: MovieListCategory, page: number = 1): Promise<MovieQueryResult> {
    switch (category) {
      case MovieListCategory.NowPlaying:
        return this.query('/movie/now_playing', { page })
      case MovieListCategory.Popular:
        return this.query('/movie/popular', { page })
      case MovieListCategory.TopRated:
        return this.query('/movie/top_rated', { page })
      case MovieListCategory.Upcoming:
        return this.query('/movie/upcoming', { page })
      default:
        throw new RangeError('Category out of range')
    }
  }

  static async search (query: string): Promise<MovieQueryResult> {
    return this.query('/search/movie', { query })
  }
}
