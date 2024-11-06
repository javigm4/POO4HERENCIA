import { Birth } from "./Birth.js";

class Director extends Birth {
  #name;
  #nationality;
  #notableFilmography;

  constructor(name, nationality, birth, notableFilmography = []) {
    super(birth.date, birth.place);
    this.#name = name;
    this.#nationality = nationality;
    this.#notableFilmography = notableFilmography;
  }

  get name() {
    return this.#name;
  }

  get nationality() {
    return this.#nationality;
  }

  get notableFilmography() {
    return this.#notableFilmography;
  }
}

export { Director };
