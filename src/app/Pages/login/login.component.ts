import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FireAuthService } from 'src/app/services/fire-auth.service';
import { FireStoreService } from 'src/app/services/fire-store.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: FireAuthService, private formBuilder: FormBuilder, private route: Router, private afs: FireStoreService) { }
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]

  });
  ngOnInit(): void {
  }

  async clickLogin() {
    console.log(this.loginForm.value);
    try {
      this.auth.Login(this.f['email'].value, this.f['password'].value);
      await this.afs.setObj("userLogs", { user: this.f['email'].value, fecha: new Date() });
      this.auth.user = this.f['email'].value.split("@")[0];

      this.route.navigateByUrl("");

    } catch (error) {
      console.log(error);
    }
  };

  clickAutoLogin() {
    this.f['email'].setValue("asd123@gmail.com");
    this.f['password'].setValue("123456");
    this.clickLogin();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
