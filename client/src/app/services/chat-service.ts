import { WebSocketService } from 'src/app/services/web-socket.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats: any[] = [];

  constructor(private socket: WebSocketService) {
    this.onReceiveMessage();
  }

  sendMessage(messageInfo: any){
    this.chats.push(messageInfo);
    this.socket.io.emit("sendMessage", messageInfo)
  }

  onReceiveMessage(){
    this.socket.io.on('reseiveMessage',(messageInfo) => {
    messageInfo.messageType = 2;
    this.chats.push(messageInfo);
    })
  }

  }
