import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  constructor() { }

  @Input() msgProp: Message;

  @Output() clickMeClicked = new EventEmitter<string>();

  onClicked(){
    this.clickMeClicked.emit('Clicked from Message Component');
  }

  ngOnInit() {
  }

}
