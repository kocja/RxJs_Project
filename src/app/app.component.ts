import {Component, Inject} from '@angular/core';
import {Operator, OperatorToken} from "./operator";

interface ButtonConfig {
  disabled?: boolean,
  label: string;
  callback: () => unknown
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buttonConfigs: ButtonConfig[];

  constructor(@Inject(OperatorToken) private operators: Operator[]
  ) {
    this.buttonConfigs = operators.map(operator => {
      let buttonConfig = <ButtonConfig>{
        disabled: undefined,
        callback: () => {
          buttonConfig.disabled = true;
          operator.subscribe().add(() => buttonConfig.disabled = undefined)
        },
        label: operator.name
      };
      return buttonConfig
    });
  }
}
