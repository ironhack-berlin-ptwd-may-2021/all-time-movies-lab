


function getAllDirectors(arrMovies) {

  return arrMovies.map(function (movie) { return movie.director })

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(m => m.genre.includes('Drama') && m.director === 'Steven Spielberg').length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {

  if (movies.length === 0) return 0

  let sum = 0
  movies.forEach(m => {
    if (m.rate) {
      sum += m.rate
    }
  });
  return Math.round((sum / movies.length) * 100) / 100

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {

  let dramaMovies = movies.filter(m => m.genre.includes("Drama"))
  return ratesAverage(dramaMovies)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)



function orderByYear(arrMovies) {

  let arrMoviesCopy = arrMovies.slice() // [...arrMovies]

  return arrMoviesCopy.sort(function (movieA, movieB) {

    if (movieA.year < movieB.year) {
      return -1
    } else if (movieA.year === movieB.year) {
      // in the case the year is exactly equal, use the title to decide the order of the two movies
      if (movieA.title < movieB.title) {
        return -1
      } else {
        return 1
      }
    } else {
      return 1
    }

  })

}


