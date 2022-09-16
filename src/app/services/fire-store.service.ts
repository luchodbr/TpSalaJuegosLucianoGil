import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private afs: AngularFirestore) { }

  getAll(entidad: string) {
    return this.afs.collection(entidad).valueChanges();
  }

  setObj(entidad: string, obj: any, id: string = obj.id) {
    return this.afs.collection(entidad).doc(id).set(obj, { merge: true });
  }
  getWithFilter(entidad: string, campo: string, value: any) {
    return this.afs.collection(entidad, ref => ref.where(campo, '==', value)).valueChanges();
  }

}
