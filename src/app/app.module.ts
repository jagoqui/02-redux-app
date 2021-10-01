import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChildComponent} from './counter/child/child.component';
import {GrandChildComponent} from './counter/grand-child/grand-child.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from "./counter/counter.reducer";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandChildComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: counterReducer}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
