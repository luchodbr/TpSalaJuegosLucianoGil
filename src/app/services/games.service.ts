import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private afs: AngularFirestore) { }

  setObj(entidad: string, obj: any, id: string = obj.id) {
    return this.afs.collection(entidad).doc(id).set(obj, { merge: true });
  }

  getGameResult(game: string) {
    return this.afs.collection('results', ref => ref.where('game', '==', game)).valueChanges();
  }
}
