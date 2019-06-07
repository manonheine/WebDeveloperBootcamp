// Create array/objects of 4 movies, with individual rating and boolean has(n't) watched. Then print as a coherent sentence.

var movies = [
  {
    // movie 1
    name: "The Lord of the Rings",
    rating: 4.5,
    hasWatched: true
  },
  {
    // movie 2
    name: "Jurassic World",
    rating: 3,
    hasWatched: false
  },
  {
    // movie 3
    name: "Rush",
    rating: 5,
    hasWatched: true
  },
  {
    // movie 4
    name: "London Spy",
    rating: 4.5,
    hasWatched: true
  }
];

movies.forEach(function(movie) {
  if (movie.hasWatched != false) {
    console.log("You have seen " + movie.name + " - rating " + movie.rating);
  }
  else {
    console.log("You haven't seen " + movie.name + " - rating " + movie.rating);
  }
});
