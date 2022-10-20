import {interval} from "rxjs";

// value will push from interval
const secondsCounter = interval(1000);
// Subscribe to start publishing values
// n het dr value vor subscription wo dr wert vom interval düre secondscounter bechunt
const subscription = secondsCounter.subscribe(n =>
  console.log(`It's been ${n + 1} seconds since subscribing!`));
