import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanComponent } from './hangman/hangman.component';
import { HangmanDisplayComponent } from './hangman/hangman-display/hangman-display.component';
import { HangmanKeyboardComponent } from './hangman/hangman-keyboard/hangman-keyboard.component';
import { HangmanQuestionComponent } from './hangman/hangman-question/hangman-question.component';
import { HigherorlowerComponent } from './higher-or-lower/higher-or-lower.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { SnakeComponent } from './snake/snake.component';
import { TriviaComponent } from './guest2/trivia/trivia.component';
import { TableResultComponent } from 'src/app/table-result/table-result.component';



@NgModule({
  declarations: [
    HangmanComponent,
    HangmanDisplayComponent,
    HangmanKeyboardComponent,
    HangmanQuestionComponent,
    HigherorlowerComponent,
    GamesComponent,
    SnakeComponent,
    TriviaComponent,
    TableResultComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule

  ]
})
export class GamesModule { }
