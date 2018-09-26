import { Component } from '@angular/core';
import Users from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aguila';
  lura = Users[0];
  diego = Users[1];
}
