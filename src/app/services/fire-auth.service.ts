import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { User } from '../models/user';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  public logged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public user: any;

  constructor(private firebase: AngularFireAuth) { }

  Register(user: User) {
    return this.firebase.createUserWithEmailAndPassword(user.email, user.password);
  }

  Login(email: string, pass: string) {
    try {
      let resp = this.firebase.signInWithEmailAndPassword(email, pass).then(c => {
        if (c.user != null) {
          this.logged.next(true);
        }
        return c;
      }).catch(e => {
        return e.code;
      })

    } catch (error) {
      return error;
    }
  }

  async LogOut() {
    try {
      let resp = await this.firebase.signOut();
      this.logged.next(false);
      return resp;
    } catch (error) {
      return null;
    }
  }
}
