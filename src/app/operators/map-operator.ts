import {map, of, Subscription} from "rxjs";
import {Injectable} from "@angular/core";
import {Operator} from "../operator";


const numbers = of(1, 2, 3);

const squareValues = map((val: number) => val * val);
const squaredNums = squareValues(numbers);

@Injectable({
  providedIn: 'root'
})
export class MapOperator implements Operator {
  name = "Map operator"

  subscribe(): Subscription {
    return squaredNums.subscribe(x => console.log(x));
  }
}

/**
 * Mapped square vo numbers (aso vo 1,2,3) und git
 * schlussendlech 1, 4, 9
 * */
