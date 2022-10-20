import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./header/header.component";
import {OperatorToken} from "./operator";
import {CatchErrorOperator} from "./error/catchError-operator";
import {ObservableFromCounter} from "./observerables/observable-from-counter";
import {ObservableFromEvent} from "./observerables/observable-from-event";
import {ObservableFromPromise} from "./observerables/observable-from-promise";
import {MapOperator} from "./operators/map-operator";
import {ObservablePipe} from "./operators/observable-pipe";
import {StandalonePipe} from "./operators/standalone-pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    { provide: OperatorToken, useClass: CatchErrorOperator, multi: true },
    { provide: OperatorToken, useClass: ObservableFromCounter, multi: true },
    { provide: OperatorToken, useClass: ObservableFromEvent, multi: true },
    { provide: OperatorToken, useClass: ObservableFromPromise, multi: true },
    { provide: OperatorToken, useClass: MapOperator, multi: true },
    { provide: OperatorToken, useClass: ObservablePipe, multi: true },
    { provide: OperatorToken, useClass: StandalonePipe, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
