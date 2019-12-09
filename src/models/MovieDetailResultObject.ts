import { Genre } from "./Movies";
import ProductionCompany from "./ProductionCompany";
import MovieResultObject from "./MovieResultObject";

export default interface MovieDetailResultObject extends MovieResultObject {
  belongs_to_collection: null | object
  budget: number
  genres: Genre[]
  homepage: string | null
  imdb_id: string | null
  production_companies: ProductionCompany[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  revenue: number
  runtime: number | null
  spoken_languages: {
    iso_639_1: string
    name: string
  }[]
  status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled'
  tagline: string | null
}
