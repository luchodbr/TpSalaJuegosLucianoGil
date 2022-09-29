
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games.component';
import { HangmanComponent } from './hangman/hangman.component';
import { HigherorlowerComponent } from './higher-or-lower/higher-or-lower.component';
import { SnakeComponent } from './snake/snake.component';
const gamesRoutes: Routes = [
    {
        path: "", component: GamesComponent
    },
    {
        path: "hangman", component: HangmanComponent
    },
    {
        path: "hol", component: HigherorlowerComponent
    },
    {
        path: "snake", component: SnakeComponent
    }

];
@NgModule({
    imports: [RouterModule.forChild(gamesRoutes)],
    exports: [RouterModule]
})
export class GamesRoutingModule { }