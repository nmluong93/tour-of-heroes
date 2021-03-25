import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : string[] = [];
  constructor() { }

  clear(){
    this.messages = [];
  }

  addMessage (msg : string) {
    this.messages.push(msg);
  }
}
