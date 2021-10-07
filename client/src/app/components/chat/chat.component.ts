import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService, logginAlerts} from 'src/app/services/chat-service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  @ViewChild("Minute", {static: false} ) minuteId!: ElementRef;

  public minute: number = 0;
  public second: number = 5;


  userChat = {
    user: '',
    text: '',
  }

  constructor(
    private activated: ActivatedRoute,
    public chat : ChatService,
    private router: Router)
    {

    // Crono:
    let intervalId = setInterval(() => {
      this.second = this.second - 1;
      if (this.second === 0 && this.minute > 0){
        this.minute = this.minute - 1;
        this.second = 59;
      }
      if(this.second === 0 && this.minute === 0){
        clearInterval(intervalId);

        // Alert: Time Out
        logginAlerts(this.router)


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





