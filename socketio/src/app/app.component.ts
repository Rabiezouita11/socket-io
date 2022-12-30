import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  socket;
  message : string | undefined;
    messages : string[] = [];
  constructor() {
    this.socket = io.connect('http://localhost:3000', {
      // Set the 'Access-Control-Allow-Origin' header
      extraHeaders: {
        'Access-Control-Allow-Origin': '*'
      },
      // Set the 'Access-Control-Allow-Credentials' header
      withCredentials: true
      ,
      // Set the 'Access-Control-Allow-Credentials' header
      transports: ['websocket']
      
    });
    this.socket.on('message', (message : string) => {
      return this.messages.push(message);
    });
  }

  sendMessage() {
    this.socket.emit('message', this.message);
    this.message = '';
  }
}
