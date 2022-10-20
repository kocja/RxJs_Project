import {filter, map, of, Subscription} from "rxjs";
import {Injectable} from "@angular/core";
import {Operator} from "../operator";

const squareOdd = of(1, 2, 3, 4, 5)
  .pipe(
    filter(n => n % 2 !== 0), // Filter items emitted by the source Observable by only emitting those that satisfy a specified predicate.
    map(n => n * n));

@Injectable({
  providedIn: 'root'
})
export class ObservablePipe implements Operator {

  name = "Observable Pipe";

  subscribe(): Subscription {
// subscribe to get values
    return squareOdd.subscribe(x => console.log(x));
  }
}
