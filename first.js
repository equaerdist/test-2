let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt("Один из просмотренных фильмов", ""),
  b = prompt("На сколько вы его оцените?", ""),
  c = prompt("Один из просмотренных фильмов", ""),
  d = prompt("На сколько вы его оцените?", "");
personalMovieDb["movies"][a] = b;
personalMovieDb["movies"][c] = d;
console.log(personalMovieDb);
