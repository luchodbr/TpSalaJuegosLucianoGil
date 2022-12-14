import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './Pages/chat/chat.component';
import { GamesComponent } from './Pages/games/games.component';
import { GamesModule } from './Pages/games/games.module';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { WhoiamComponent } from './Pages/whoiam/whoiam.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "whoim", component: WhoiamComponent },
  { path: "chat", component: ChatComponent },
  {
    path: "games", children: [{
      path: '', loadChildren: () => import('./Pages/games/games.module').then(m => m.GamesModule)
    }]
  },
  { path: "**", redirectTo: "" }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
