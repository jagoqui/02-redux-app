import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from "../../reducers";
import {reset} from "../counter.actions";

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent {
  counter: number = 0;

  constructor(private storeSvc: Store<AppState>) {
    this.storeSvc.select('counter').subscribe((counter) => this.counter = counter);
  }

  onReset() {
    this.storeSvc.dispatch(reset());
  }
}
