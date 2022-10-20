import {InjectionToken} from "@angular/core";
import {Subscription} from "rxjs";

export interface Operator {

  name: string;

  subscribe(): Subscription;
}

export const OperatorToken = new InjectionToken<Operator>("Operator");
