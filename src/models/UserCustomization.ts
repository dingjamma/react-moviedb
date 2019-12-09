import Rating from "./Rating"

class UserState<T> {
  private key: string
  constructor (key: string) {
    this.key = key
  }
  get all (): T[] {
    return window.localStorage[this.key] ? JSON.parse(window.localStorage[this.key]) : []
  }
  add (i: T): void {
    if (!this.all.includes(i)) {
      window.localStorage[this.key] = JSON.stringify([...this.all, i])
    }
  }
  remove (i?: T): void {
    const op = this.all
    while (i && op.includes(i)) {
      op.splice(op.indexOf(i), 1)
    }
    window.localStorage[this.key] = JSON.stringify(op)
  }
}

export const favorites = new UserState<number>('favorites')
export const ratings = new UserState<Rating>('ratings')
