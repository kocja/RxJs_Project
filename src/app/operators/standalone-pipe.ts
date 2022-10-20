import {filter, map, of, pipe, Subscription} from "rxjs";
import {Injectable} from "@angular/core";
import {Operator} from "../operator";

const nums = of(1, 2, 3, 4, 5);

// function, that accepts observables
const squareOddValues = pipe(
  filter((n: number) => n % 2 !== 0),
  map(n => n*n)
);


// Creating of observable, runs the filter and map function
const squareOdd = squareOddValues(nums);

@Injectable({
  providedIn: 'root'
})
export class StandalonePipe implements Operator {

  name = "Standalone Pipe";

  subscribe(): Subscription {
    // subscribing to run combined functions
    return squareOdd.subscribe(x => console.log(x));
  }
}
