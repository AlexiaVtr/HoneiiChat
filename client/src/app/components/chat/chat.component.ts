import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import * as countdown from 'countdown';
import { ChatService } from 'src/app/services/chat-service';
import { DateTime, Duration } from 'luxon';
import { interval, Subscription, Observable, of } from 'rxjs';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  @ViewChild("Second", {static: false} ) secondId!: ElementRef;
  @ViewChild("Minute", {static: false} ) minuteId!: ElementRef;

  userChat = {
    user: '',
    text: '',
  }

//  subscription!: Subscription;
  source = interval(1000);
//  sec = moment().local()
//  secondFormat:string = this.sec.format("ss").toString()
//  min = moment().local().format("mm")
  countdownNow = () => {
    const now:any = moment().local().format("mm:ss")
    const countDate:string = now.plus('15',now)
    const gap = Number(countDate) - Number(now)
    const nowSeconds:number = 1000;
    const nowMinutes:number =  nowSeconds * 60;
    return "asd"

  }
  timer = this.countdownNow

  plus(plus:any, time:any) {

    let hour = time
    hour.add(plus, 'minutes');

    return hour.format("mm:ss");
  }


  constructor(private activated: ActivatedRoute, public chat : ChatService, private renderer: Renderer2) {

   }


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

//  addText(){
//    let text = this.renderer.createText("my button");
//    this.renderer.appendChild(this.secondId.nativeElement, text);
//  }
  timeSubscription = this.source.subscribe({
    next(num) {
      let cron = moment().local().format("ss").toString()
          console.log(cron)
          return cron
    }});


  ngAfterViewInit() {
  this.renderer.setProperty(this.secondId.nativeElement,'innerHTML', this.timer)};

  setProperty() {
    this.renderer.setProperty(this.secondId.nativeElement,'innerHTML', this.countdownNow);
      };




}




