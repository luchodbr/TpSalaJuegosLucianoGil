import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanComponent } from './hangman/hangman.component';
import { HangmanDisplayComponent } from './hangman/hangman-display/hangman-display.component';
import { HangmanKeyboardComponent } from './hangman/hangman-keyboard/hangman-keyboard.component';
import { HangmanQuestionComponent } from './hangman/hangman-question/hangman-question.component';
import { HigherorlowerComponent } from './higher-or-lower/higher-or-lower.component';
import { GamesRoutingModule } from './games-routing.module';



@NgModule({
  declarations: [
    HangmanComponent,
    HangmanDisplayComponent,
    HangmanKeyboardComponent,
    HangmanQuestionComponent,
    HigherorlowerComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
