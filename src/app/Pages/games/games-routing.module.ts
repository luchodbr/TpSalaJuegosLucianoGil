
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangmanComponent } from './hangman/hangman.component';
import { HigherorlowerComponent } from './higher-or-lower/higher-or-lower.component';
const gamesRoutes: Routes = [

    {
        path: "hangman", pathMatch: 'full', component: HangmanComponent
    },
    {
        path: "hol", pathMatch: 'full', component: HigherorlowerComponent
    }

];
@NgModule({
    imports: [RouterModule.forChild(gamesRoutes)],
    exports: [RouterModule]
})
export class GamesRoutingModule { }