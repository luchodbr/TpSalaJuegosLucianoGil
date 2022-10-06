import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireAuthService } from './fire-auth.service';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private afs: AngularFirestore, private auth: FireAuthService) { }

  getAll(entidad: string) {
    return this.afs.collection(entidad).valueChanges();
  }

  setObj(entidad: string, obj: any, id: string = obj.id) {
    return this.afs.collection(entidad).doc(id).set(obj, { merge: true });
  }

  getWithFilter(entidad: string, campo: string, value: any) {
    return this.afs.collection(entidad, ref => ref.where(campo, '==', value)).valueChanges();
  }


  setMessege(message: any) {
    return this.afs.collection('ChatStorage').add({
      ID: Date.now(),
      hour: message.hour,
      message: message.message,
      user: this.auth.user
    })
  }
  getMessage() {
    return this.afs.collection('ChatStorage', ref => ref.orderBy('ID', 'asc')).valueChanges();
  }

  removeObj(entidad: string, obj: any) {
    return this.afs.collection(entidad).doc(obj.id).delete();
  }

}
