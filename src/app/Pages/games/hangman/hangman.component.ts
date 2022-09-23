import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/services/fire-auth.service';
import { FireStoreService } from 'src/app/services/fire-store.service';
import { HangmanService } from 'src/app/services/hangman-service.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  question: string = '';
  questions: string[] = [];
  guesses: string[] = [];
  category: string = '';
  restartGameBtnShown = false;
  result!: any;
  listResults!: any[];
  constructor(
    private hangmanService: HangmanService,
    private afs: FireStoreService,
    private auth: FireAuthService
  ) { }

  ngOnInit(): void {
    this.hangmanService.getQuestions().subscribe((response: any) => {
      this.questions = response.items;
      this.category = response.category;
      this.pickNewQuestion();
    });
    this.afs.getGameResult("Hangman").subscribe((x: any) => {
      this.listResults = x;
    });
  }

  guess(letter: string) {
    if (!letter || this.guesses.includes(letter)) {
      return;
    }
    this.guesses = [...this.guesses, letter];
  }

  dummyClick() {
    const key = prompt('Enter a key') || '';
    this.guess(key);
  }

  reset() {
    this.guesses = [];
    this.pickNewQuestion();
    this.restartGameBtnShown = false;
  }

  pickNewQuestion() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.question = this.questions[randomIndex];
    console.log(this.question);
  }

  onGameFinished(event: any) {
    if (event > 0) {
      this.result = {
        id: Guid.create().toString(),
        game: "Hangman",
        score: event.toString(),
        user: this.auth.user.displayName
      };

      this.afs.setObj("results", this.result).then(x => {

      });
    }
    this.restartGameBtnShown = true;
  }
}