import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Mensaje } from '../chat/mensaje';
import { collectExternalReferences } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private firestore:FirestoreService, private afs:AngularFirestore) { }

  public async createOne(message: Mensaje, coleccion: string) {
    try {
        const result = await this.firestore.crear(coleccion, {fecha:message.fecha,hora:message.hora,usuario:message.usuario,mensaje:message.mensaje});
        return result;
    }
    catch (error) {  }
    return;
  }

  getAll(coleccion: string) {
    const mensajesCollectionRef = this.afs.collection<Mensaje>('chat', ref => ref.orderBy('fecha', 'asc').orderBy('hora', 'asc'));
    return mensajesCollectionRef.snapshotChanges();
  }
}
