import { WebSocketService } from 'src/app/services/web-socket.service';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class ChatService {
  chats: any[] = [];

  constructor(
    private socket: WebSocketService,
    private router: Router) {

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

  export function logginAlerts(router: Router){
    Swal.fire({
      title: '¡Se acabó el tiempo!',
      icon: 'info',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: '¡Loguearse!',
      denyButtonText: `No, gracias`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        // Loggin:
        Swal.fire({
          title: 'Escribe tu email',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
//              confirmButtonText: 'Look up',
          showLoaderOnConfirm: true,
          width: 600,
          padding: '3em',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `,

          // Save the login data:
          preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
              .then(response => {
                if (!response.ok) {
                  throw new Error(response.statusText)
                }
                return response.json()
              })
              .catch(error => {
                Swal.showValidationMessage(
                  `Request failed: ${error}`
                )
              })
          },
          allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Escribe tu contraseña',
                input: 'password',
                inputAttributes: {
                  autocapitalize: 'off'
                },
                showCancelButton: true,
  //              confirmButtonText: 'Look up',
                showLoaderOnConfirm: true,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `,

                // Save the login data:
                preConfirm: (login) => {
                  return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                      if (!response.ok) {
                        throw new Error(response.statusText)
                      }
                      return response.json()
                    })
                    .catch(error => {
                      Swal.showValidationMessage(
                        `Request failed: ${error}`
                      )
                    })
                },
                allowOutsideClick: () => !Swal.isLoading()
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: `${result.value.login}'s avatar`,
                      imageUrl: result.value.avatar_url
                    })
                  }
                })
            }
          })

        //Cancel & Request failed:
      } else{

          // Redirection to home:
          router.navigateByUrl('');
      }
    })
  }

