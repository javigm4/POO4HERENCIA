import { Movie } from "./Movie.js";
import { Director } from "./Director.js";
import { Birth } from "./Birth.js";

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

export const getBirth = (movie) => {
  return {
    date: movie.director.date, //se usan los getters para acceder a date y place del director
    place: movie.director.place,
  };
};
