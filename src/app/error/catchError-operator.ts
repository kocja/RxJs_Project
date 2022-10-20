import {ajax} from "rxjs/internal/ajax/ajax";
import {catchError, map, of, Subscription} from "rxjs";
import {Injectable} from "@angular/core";
import {Operator} from "../operator";

// Throw error if the response is null
const apiData = ajax('/api/data').pipe(
  map((res: any) => {
    if (!res.response) {
      throw new Error('Value expected')
    }
    return res.response;
  }),
  catchError(() => of([]))
);

@Injectable({
  providedIn: 'root'
})
export class CatchErrorOperator implements Operator {

  name = "Catch Error Operator";

  subscribe(): Subscription {
    return apiData.subscribe({
      next(x: string) {
        console.log('data: ', x)
      },
      error() {
        console.log('errors already caught... will not run');
      }
    });
  }
}
