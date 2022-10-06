import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { TriviaService } from 'src/app/services/trivia.service';
import { Guid } from 'guid-typescript';
import { FireAuthService } from 'src/app/services/fire-auth.service';
import { TriviaModel } from 'src/app/models/trivia';
import { Results } from 'src/app/models/results';
import { FireStoreService } from 'src/app/services/fire-store.service';
import { GamesService } from 'src/app/services/games.service';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {
  jugo: boolean = false;
  respuestasCorrectas: number = 0;
  valor: any;
  results!: Results;
  listResults!: Results[];
  @ViewChild('ruleta') ruleta!: ElementRef;
  @ViewChild('audio') audio!: ElementRef;

  constructor(private service: TriviaService,
    private afsSerivce: GamesService,
    private auth: FireAuthService) {

  }

  ngOnInit(): void {
    this.afsSerivce.getGameResult("Trivia").subscribe(x => {
      this.listResults = x as Results[];
    });
  }

  girar() {
    if (!this.jugo) {
      let rand = Math.random() * 7200;
      this.calcular(rand);
      this.jugo = true;
      this.audio.nativeElement.play();
    }

  }

  test(question: TriviaModel) {
    let text = question.question.replace("&quot;", "'");
    text = text.replace("&#039;", "'");
    Swal.fire({
      title: question.category,
      text: text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      cancelButtonColor: '#7066e0',
      reverseButtons: false,
      allowOutsideClick: false,
    }).then((result: any) => {
      if ((result.isConfirmed && question.correct_answer == "True") ||
        (result.dismiss === Swal.DismissReason.cancel && question.correct_answer == "False")) {
        Swal.fire(
          'Correct!',
          ':)',
          'success'
        );
        this.respuestasCorrectas++;
      } else {
        Swal.fire(
          'Incorrect!',
          ':(',
          'error'
        );
        if (this.respuestasCorrectas > 0) {

          this.results = {
            id: Guid.create().toString(),
            game: "Trivia",
            score: this.respuestasCorrectas.toString(),
            user: this.auth.user
          }

          this.afsSerivce.setObj("results", this.results).then(x => {

          });
        }
        this.respuestasCorrectas = 0;
      }
    });
  }



  getTrivia(tipoTrivia: number) {
    this.service.GetPreguntas(tipoTrivia.toString()).subscribe(resp => {
      let currentQuestion = resp.results[0] as TriviaModel;
      this.test(currentQuestion);
      this.jugo = false;
    });
  }

  calcular(rand: number) {
    this.valor = rand / 360;
    this.valor = (this.valor - parseInt(this.valor.toString().split(".")[0])) * 360;

    console.log(this.valor);
    this.ruleta.nativeElement.style.transform = `rotate(${rand}deg)`;

    setTimeout(() => {
      if (this.valor > 334 || this.valor <= 26) {
        this.getTrivia(23);
      }
      else if (this.valor > 26 && this.valor <= 78) {
        this.getTrivia(25);
      }
      else if (this.valor > 78 && this.valor <= 130) {
        this.getTrivia(17);
      }
      else if (this.valor > 130 && this.valor <= 182) {
        this.getTrivia(21);
      }
      else if (this.valor > 182 && this.valor <= 234) {
        this.getTrivia(23);
      }
      else if (this.valor > 234 && this.valor <= 286) {
        this.getTrivia(15);
      }
      else if (this.valor > 286 && this.valor <= 334) {
        this.getTrivia(0);
      }
    }, 5000);
  }


}