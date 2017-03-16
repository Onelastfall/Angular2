import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onUpdate(event)
  {
    console.log(event);
  }
  constructor
  (
    @Inject('mail') private mail
  ){}
}
