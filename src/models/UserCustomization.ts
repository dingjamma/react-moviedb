import Rating from "./Rating"
import MovieDetailResultObject from "./MovieDetailResultObject"

class UserState<T> {
  private key: string
  constructor (key: string) {
    this.key = key
  }
  get all (): T[] {
    return window.localStorage[this.key] ? JSON.parse(window.localStorage[this.key]) : []
  }
  add (i: T): void {
    if (!this.has(i)) {
      window.localStorage[this.key] = JSON.stringify([...this.all, i])
    }
  }
  remove (i?: T): void {
    const op = this.all
    while (i && this.has(i)) {
      op.splice(this.indexOf(i), 1)
      window.localStorage[this.key] = JSON.stringify(op)
    }
  }
  indexOf (i: T): number {
    const op = this.all
    for (let c of op) {
      if (this.compare(i, c)) {
        return op.indexOf(c)
      }
    }
    return -1
  }
  has (i: T): boolean {
    return this.indexOf(i) > -1
  }
  compare (i: T, c: T): boolean {
    return ((i as any).id && (c as any).id) ? (i as any).id === (c as any).id : i === c
  }
}

export const favorites = new UserState<MovieDetailResultObject>('favorites')
export const ratings = new UserState<Rating>('ratings')
