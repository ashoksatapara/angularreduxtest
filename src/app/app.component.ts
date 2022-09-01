import { Component } from '@angular/core';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularedux-test';
}
