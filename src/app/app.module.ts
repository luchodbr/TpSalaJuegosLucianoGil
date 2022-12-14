import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { NavBarHComponent } from './Pages/nav-bar-h/nav-bar-h.component';
import { RegisterComponent } from './Pages/register/register.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WhoiamComponent } from './Pages/whoiam/whoiam.component';
import { DialogModule } from 'primeng/dialog';
import { RegisterDialogComponent } from './Pages/register-dialog/register-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './Pages/chat/chat.component';
import { TableResultComponent } from './table-result/table-result.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavBarHComponent,
    RegisterComponent,
    WhoiamComponent,
    RegisterDialogComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
