import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ChatService } from '../services/chat.service';
import { Mensaje } from './mensaje';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public user:any;
  mensaje:Mensaje = {mensaje:'', usuario:'', fecha:'', hora:''};

  chat:any[] = [];

  constructor(private chatService:ChatService, private authSvc:AuthService, private firestore:FirestoreService) {
    this.gaurdarUsuario();
   }

  async gaurdarUsuario()
  {
    this.user = await this.authSvc.getCurentUser();
  }
  ngOnInit() {
    this.chatService.getAll('chat').subscribe((chatSnapshot) => {
      this.chat = [];
      chatSnapshot.forEach((messageData: any) => {
        this.chat.push({
          id: messageData.payload.doc.id,
          data: messageData.payload.doc.data()
        });
      })
    });
  }

  async send()
  {
    let date:Date = new Date();
    this.mensaje.usuario =  this.user.email;
    this.mensaje.fecha = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
    this.mensaje.hora = date.getHours() + ':' + date.getMinutes();

    console.info(this.mensaje);
    console.info(this.chat);
    // this.chatService.createOne(this.mensaje, 'chat');
    this.firestore.crear('chat', {fecha:this.mensaje.fecha, hora:this.mensaje.hora, usuario:this.mensaje.usuario, mensaje:this.mensaje.mensaje });
  }
}
