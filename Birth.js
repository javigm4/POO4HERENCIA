class Birth {
  #date;
  #place;

  constructor(date, place) {
    this.#date = date;
    this.#place = place;
  }

  get date() {
    return this.#date;
  }

  get place() {
    return this.#place;
  }
}

export { Birth };
