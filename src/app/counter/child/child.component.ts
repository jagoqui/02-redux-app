import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from "../../reducers";
import * as actions from "../counter.actions";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  counter: number = 0;

  constructor(private storeSvc: Store<AppState>) {
    this.storeSvc.select('counter').subscribe((counter: number) => this.counter = counter);
  }

  onMultiply() {
    this.storeSvc.dispatch(actions.multiply({number:2}));
  }

  onDivide() {
    this.storeSvc.dispatch(actions.divide({number:2}));
  }

  resetFromGrandChild(number: number) {
    this.storeSvc.dispatch(actions.reset());
  }
}
