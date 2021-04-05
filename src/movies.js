// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = arr => [...new Set(arr.map(a=>a['director']))];

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = arr => ((arr.filter(e => e.director === "Steven Spielberg")).filter(e => e.genre.includes("Drama"))).length;

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr => arr.length !== 0 ? Math.round((arr.map(a=> typeof(a.rate) !== 'number' ? 0 : a.rate).reduce((acc, val) => acc + val)/arr.map(a=> a.rate).length)*100)/100 : 0;

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr => ratesAverage(arr.filter(a => a.genre.includes("Drama")));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arr => arr.sort((a, b) => a.year !== b.year ? a.year - b.year : a.title - b.title);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arr => new Array(arr.sort((a, b) => a.title - b.title)).toString();

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => arr.map(a => a.duration )
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
