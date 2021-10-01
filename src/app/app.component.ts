import {Component, OnDestroy} from '@angular/core';
import {Store} from "@ngrx/store";
import * as actions from "./counter/counter.actions";
import {AppState} from "./reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  counter: number = 0;

  constructor(private storeSvc: Store<AppState>) {
    this.storeSvc.select('counter').subscribe((counter) => this.counter = counter);
  }

  onIncrement() {
    this.storeSvc.dispatch(actions.increment());
  }

  onDecrement() {
    this.storeSvc.dispatch(actions.decrement());
  }

  ngOnDestroy() {
    this.storeSvc.dispatch(actions.reset());
  }

}
