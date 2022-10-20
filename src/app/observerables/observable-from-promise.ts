import {from, Subscription} from "rxjs";
import {Injectable} from "@angular/core";
import {Operator} from "../operator";

// Creating observable out of a promise
const data = from(fetch(
  '/api/endpoint' // TODO
));

@Injectable({
  providedIn: 'root'
})
export class ObservableFromPromise implements Operator {

  name = "Observable From Promise";

  subscribe(): Subscription {
    // subscribing to make the obs. async
    return data.subscribe({
      next(response) {
        console.log(response)
      }
    })
  }
}
