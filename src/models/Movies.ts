import { api_key, base } from '../appSettings.json'
import MovieListCategory from './MovieListCategory'
import MovieResultObject from './MovieResultObject.js'
import MovieDetailResultObject from './MovieDetailResultObject.js'

export interface MovieQueryResult {
  page: number,
  results: MovieResultObject[],
  total_results: number,
  total_pages: number
}

export interface QueryParams {
  [index: string]: any
  page?: number,
  query?: string
}

export interface Genre {
  id: number,
  name: string
}

export default class Movies {
  private static async query<T> (method: string, params?: QueryParams): Promise<T> {
    if (params) {
      for (let [key, value] of Object.entries(params)) {
        if (!value) {
          delete params[key]
        }
      }
    }
    const response = await fetch(`${base}${method}?${Object.entries({
      api_key, ...params
    }).map(x => x.join('=')).join('&')}`)
    return response.json()
  }

  static list (category: MovieListCategory, page: number = 1): Promise<MovieQueryResult> {
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

  static search (query: string): Promise<MovieQueryResult> {
    return this.query('/search/movie', { query })
  }

  static get genres (): Promise<Genre[]> {
    return this.query('/genre/movie/list')
  }

  static discover (year?: number, genreIds?: number[], page: number = 1): Promise<MovieQueryResult> {
    return this.query('/discover/movie',  {year, with_genres: genreIds?.join(','), page})
  }

  static detail (id: string): Promise<MovieDetailResultObject> {
    return this.query('/movie/' + id)
  }
}
