import {fromEvent} from "rxjs";

const element = document.getElementById('element')!;

// observable, which observes the movement of the mouse
const mouseMoves = fromEvent<MouseEvent>(element, 'mousemove');

// subscribes to the mouse movements
const subscription = mouseMoves.subscribe(evt => {
  console.log('Coordinates. ${evt.clientX} X ${evt.clientY}');

  // Stop listening, sobaud er obe links achunt (unsubscribe)
  if (evt.clientX < 40 && evt.clientY < 40) {
    subscription.unsubscribe();
  }
})

