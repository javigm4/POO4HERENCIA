import Director from "./Director.js";

class Movie {
  #title;
  #director;
  #year;
  #genre;
  #duration;
  #rating;
  #synopsis;

  constructor(title, director, year, genre, duration, rating, synopsis) {
    this.#title = title;
    this.#director = director;
    this.#year = year;
    this.#genre = genre;
    this.#duration = duration;
    this.#rating = rating;
    this.#synopsis = synopsis;
  }

  get title() {
    return this.#title;
  }

  get director() {
    return this.#director;
  }

  get year() {
    return this.#year;
  }

  get genre() {
    return this.#genre;
  }

  get duration() {
    return this.#duration;
  }

  get rating() {
    return this.#rating;
  }

  get synopsis() {
    return this.#synopsis;
  }
}

export { Movie };
