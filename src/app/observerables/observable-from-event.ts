import {fromEvent, Subscription} from "rxjs";
import {Operator} from "../operator";


export class ObservableFromEvent implements Operator {

  name = "Observable from event"

  subscribe(): Subscription {
    const mouseMoves = fromEvent<MouseEvent>(window, 'mousemove');

    const subscription = mouseMoves.subscribe(evt => {
      console.log(`Coordinates. ${evt.x} X ${evt.y}`);

      // Stop listening, sobaud er obe links achunt (unsubscribe)
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });
    return subscription;
  }
}
