import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Food } from "./game-engine/food";
import { Snake } from "./game-engine/snake";
import { outsideGrid } from "./game-engine/gameboard-grid.util";
import { GamesService } from 'src/app/services/games.service';
import { Results } from 'src/app/models/results';
import { Guid } from 'guid-typescript';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  title = 'snakeGame1938web';
  gameBoard: any;
  snake = new Snake();
  food = new Food(this.snake);
  listResults!: Results[] | any[];
  results: Results | any;

  constructor(private afs: GamesService, private auth: FireAuthService) {
    this.afs.getGameResult("Snake").subscribe(x => {
      this.listResults = x as any[];
    });
  }
  lastRenderTime = 0
  gameOver = false

  ngAfterViewInit() {
    this.gameBoard = document.querySelector('.game-board');
    window.requestAnimationFrame(this.start.bind(this));
  }

  ngOnInit(): void {
    this.snake.listenToInputs();
    this.afs.getGameResult("HoL").subscribe(x => {
      this.listResults = x as any[];
    });
  }
  dpadMovement(direction: string) {
    this.snake.input.setDirection(direction);
  }


  start(currentTime: any) {
    if (this.gameOver) {
      this.results = {
        id: Guid.create().toString(),
        game: "Snake",
        score: this.food.currentScore.toString(),
        user: this.auth.user
      };


      this.afs.setObj("results", this.results).then(x => {

      });
      return console.log('Game Over');
    }

    window.requestAnimationFrame(this.start.bind(this));
    const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / this.snakeSpeed) {
      return;
    }
    this.lastRenderTime = currentTime;

    this.update();
    this.draw();
  }

  update() {
    this.snake.update();
    this.food.update();
    this.checkDeath();
  }

  draw() {
    this.gameBoard.innerHTML = '';
    this.snake.draw(this.gameBoard);
    this.food.draw(this.gameBoard);
  }

  checkDeath() {
    this.gameOver = outsideGrid(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if (!this.gameOver) {
      return;
    }
    this.gameBoard.classList.add('blur');
  }


  get snakeSpeed() {
    const score = this.food.currentScore;
    if (score < 10) {
      return 4;
    }
    if (score > 10 && score < 15) {
      return 5;
    }
    if (score > 15 && score < 20) {
      return 6;
    }
    return 7;
  }

}