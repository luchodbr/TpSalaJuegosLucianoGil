import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data, Router } from '@angular/router';
import { Message } from 'src/app/models/message';
import { FireAuthService } from 'src/app/services/fire-auth.service';
import { FireStoreService } from 'src/app/services/fire-store.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  username: Observable<string> | null;
  OldMessageUsername: any;
  message: Message;
  msgs: Array<Message> = [];
  horaMensajeViejo: string = "";
  Date: Date = new Date();
  firsTime: boolean = true;

  constructor(public aFAuth: FireAuthService, public router: Router, private aFStore: FireStoreService) {
    this.username = aFAuth.user;
    this.message = new Message("", "", "");
  }

  ngOnInit(): void {
    this.getMessages();
  }

  submit() {
    if (this.message.message != "" && this.message != undefined) {

      this.message.hour = this.Date.getHours() + ':' + this.Date.getMinutes()
      this.message.user = this.aFAuth.user;
      this.msgs.push(this.message);

      this.aFStore.setMessege({
        hour: this.message.hour,
        message: this.message.message
      })

      this.message = this.clearMesagge();
    }
  }

  getMessages() {
    this.aFStore.getMessage().subscribe((data: any) => {
      if (this.firsTime == true) {
        this.msgs = data as Array<Message>;
        this.firsTime = false;
        console.log(data);
      }
    })
  }

  clearMesagge() {
    return new Message("", "", "");
  }
}


