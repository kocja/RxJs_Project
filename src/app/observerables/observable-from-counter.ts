import {interval, Subscription, take} from "rxjs";
import {Injectable} from "@angular/core";
import {Operator} from "../operator";

// value will push from interval
const secondsCounter = interval(1000).pipe(take(2));
// Subscribe to start publishing values
// n het dr value vor subscription wo dr wert vom interval düre secondscounter bechunt
const subscription = secondsCounter.subscribe(n =>
  console.log(`It's been ${n + 1} seconds since subscribing!`), null);

@Injectable({
  providedIn: 'root'
})
export class ObservableFromCounter implements Operator {
  name = "Observable From Counter";

  subscribe(): Subscription {
    return secondsCounter.subscribe(n =>
      console.log(`It's been ${n + 1} seconds since subscribing!` + subscription), null);
  }
}
