import { Movie } from "./Movie.js";
import { Birth } from "./Birth.js";
import { Director } from "./Director.js";

let birth = new Birth("31 de octubre de 1961", "Pukera Bay, Nueva Zelanda");

let director = new Director("Peter Jackson", "Neozelandés", birth, [
  "El Señor de los Anillos",
  "El Hobbit",
  "King Kong",
]);

let movie = new Movie(
  "El Señor de  los Anillos: La Comunidad del Anillo",
  director,
  2001,
  "Fantasía",
  178,
  9.2,
  "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro"
);
/*
let movie = {
  title: "El Señor de  los Anillos: La Comunidad del Anillo",
  director: {
    name: "Peter Jackson",
    nationality: "Neozelandés",
    birth: {
      date: "31 de octubre de 1961",
      place: "Pukera Bay, Nueva Zelanda",
    },
    notableFilmography: ["El Señor de los Anillos", "El Hobbit", "King Kong"],
  },
  year: 2001,
  genre: "Fantasía",
  duration: 178,
  rating: 9.2,
  synopsis:
    "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro",
};*/

//................................................
describe("Inheritance - Birth class", () => {
  it("should get date and place of birth of Peter Jackson", () => {
    expect(movie.director.date).toBe("31 de octubre de 1961");
    expect(movie.director.place).toBe("Pukera Bay, Nueva Zelanda");
  });
});
describe("Inheritance - Director class", () => {
  it("should gets name, nationality and notableFilmography for Director", () => {
    expect(movie.director.name).toBe("Peter Jackson");
    expect(movie.director.nationality).toBe("Neozelandés");
    expect(movie.director.notableFilmography).toEqual([
      "El Señor de los Anillos",
      "El Hobbit",
      "King Kong",
    ]);
  });
});

describe("Inheritance - Movie class", () => {
  it("should gets title, year, genre, duration, rating and synopsis for El Señor de los Anillos", () => {
    expect(movie.title).toBe(
      "El Señor de  los Anillos: La Comunidad del Anillo"
    );
    expect(movie.year).toBe(2001);
    expect(movie.genre).toBe("Fantasía");
    expect(movie.duration).toBe(178);
    expect(movie.rating).toBe(9.2);
    expect(movie.synopsis).toBe(
      "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro"
    );
  });
});
