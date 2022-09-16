import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-nav-bar-h',
  templateUrl: './nav-bar-h.component.html',
  styleUrls: ['./nav-bar-h.component.scss']
})
export class NavBarHComponent implements OnInit {

  isLoged$: Observable<boolean>;
  constructor(private fireAuth: FireAuthService) {
    this.isLoged$ = this.fireAuth.logged.asObservable();
  }

  ngOnInit(): void {
  }

  logOut() {
    this.fireAuth.LogOut();

  }
}
