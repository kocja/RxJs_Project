import {from} from "rxjs";

// Creating observable out of a promise
const data = from(fetch(
  '/api/endpoint' // TODO
));

// subscribing to make the obs. async
data.subscribe({
  next(response) {console.log(response)}
})
