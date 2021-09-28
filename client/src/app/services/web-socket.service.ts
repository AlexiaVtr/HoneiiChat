import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  io = io('http://localhost:3000', {
    withCredentials: true,
    autoConnect: true
  });

  constructor() {
   }
  }
