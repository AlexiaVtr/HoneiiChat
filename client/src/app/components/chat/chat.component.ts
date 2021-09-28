import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chat-service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  userChat = {
    user: '',
    text: ''
  }

  constructor(private activated: ActivatedRoute, public chat : ChatService) { }

  ngOnInit(): void {
    const id = this.activated.snapshot.params.id;
    this.userChat.user = id
  }

  sendMessage(){
    let messageInfo = {
      text: this.userChat.text,
      user: this.userChat.user,
      messageType: 1
    };
    this.chat.sendMessage(messageInfo);
    this.userChat.text = "";
  }

}

