import {map, of} from "rxjs";

const numbers = of(1, 2, 3);

const squareValues = map((val: number) => val * val);
const squaredNums = squareValues(numbers);

squaredNums.subscribe(x => console.log(x))

/**
 * Mapped square vo numbers (aso vo 1,2,3) und git
 * schlussendlech 1, 4, 9
 * */
