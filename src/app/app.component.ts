import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'App Component';
  message:Message = new Message('Message from App Component', 'Rahul');
}
