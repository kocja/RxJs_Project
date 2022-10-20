import {filter, map, of, pipe} from "rxjs";

const nums = of(1, 2, 3, 4, 5);

// function, that accepts observables
const squareOddValues = pipe(
  filter((n: number) => n % 2 !== 0),
  map(n => n*n)
);


// Creating of observable, runs the filter and map function
const squareOdd = squareOddValues(nums);


// subscribing to run combined functions
squareOdd.subscribe(x => console.log(x));
