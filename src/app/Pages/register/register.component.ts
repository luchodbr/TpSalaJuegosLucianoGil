import { Component, OnInit } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { user } from '@angular/fire/auth';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPass: ['', [Validators.required]]

  });

  display: boolean = false;
  constructor(private auth: FireAuthService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }


  showDialog() {
    this.display = true;
  }
  clickRegister() {
    console.log(this.loginForm.value);
    if (this.f['password'].value === this.f['confirmPass'].value) {
      this.auth.Register({ email: this.f['email'].value, password: this.f['password'].value, fecha: null }).then((c) => {
        if (c)
          this.route.navigateByUrl('/login');
      }).catch(e => {
        console.log(e);
        if (e.code == "auth/email-already-in-use")
          this.display = true;
      })
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
