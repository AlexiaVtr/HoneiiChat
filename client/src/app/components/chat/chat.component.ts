import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat-service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  @ViewChild("Minute", {static: false} ) minuteId!: ElementRef;

  public minute: number = 15;
  public second: number = 59;


  userChat = {
    user: '',
    text: '',
  }

  constructor(private activated: ActivatedRoute, public chat : ChatService, private renderer: Renderer2, private router: Router) {
    let intervalId = setInterval(() => {
      this.second = this.second - 1;
      if (this.second === 0 && this.minute > 0){
        this.minute = this.minute - 1;
        this.second = 59;
      }
      if(this.second === 0 && this.minute === 0){
        clearInterval(intervalId);
        this.router.navigateByUrl('');
      }
  }, 1000)

   }

  ngOnInit(): void {
    const id = this.activated.snapshot.params.id;
    this.userChat.user = id;
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





