import { Component, OnInit } from '@angular/core';
import * as stringSimilarity from 'string-similarity';

@Component({
  selector: 'app-uraian2',
  templateUrl: './uraian2.component.html',
  styleUrls: ['./uraian2.component.scss']
})
export class Uraian2Component  {

  constructor() { }

  //uraian
  quizQuestions = [
    {
      question: "1.	Paraga sajroning pacelathon kasebut yaiku… ",
      answer: "Mbah kakung, Ibu, lan Galih",
      explanation: "Paraga utawa tokoh ing pacelathon kuwi yaiku Mbah kakung, Ibu, lan Galih."
    },
    {
      question: "2.	Nalika ngerti mbah kakung ngingu iwak koi, Galih kerep ing daleme simbah merga …",
      answer: "dheweke seneng deloki iwak koi",
      explanation: "Saka pacelathone Galih kang unine “Inggih, Bu, lha kula remen ningali iwak koi menika, Bu.” (jawabane Galih kanthi wedi), bisa dijupuk dudutan yen Galih kerep ing daleme simbah merga seneng deloki iwak koi."
    },
    {
      question: "3.	Ibune Galih bingung amarga … ",
      answer: "Galih durung mulih sekolah",
      explanation: "Saka ukara “Ibune Galih bingung goleki Galih kang durung mulih saka sekolahane.”, nandakake yen ibune Galih bingung merga Galih durung mulih saka sekolahane."
    },
    {
      question: "4.	Welinge ibu marang Galih yaiku sawise mulih sekolah kudu… ",
      answer: "pamit marang ibue",
      explanation: "Welinge ibune Galih yen arep lunga sawise mulih sekolah yaiku kudu pamit marang ibune dhisik supaya ibune ora bingung goleki."
    },
    {
      question: "5.	Dudutan kang bisa dijupuk saka pacelathon ing dhuwur yaiku … ",
      answer: "yen arep lunga kudu pamit dhisik marang wong tuwa supaya ora nggawe bingung ",
      explanation: "Dudutan utawa kesimpulan sing bisa dijupuk saka pacelathon kuwi yaiku yen arep lunga kudu pamit dhisik marang wong tuwa supaya ora nggawe bingung."
    }
  ];

  
  userAnswers: string[] = [];
  showFinalScore = false;
  finalScore = 0;
  showExplanation: boolean = false;

  
  calculateFinalScore() {
    let totalScore = 0;
    let answeredQuestions = 0;
    for (let i = 0; i < this.quizQuestions.length; i++) {
      const userAnswer = this.userAnswers[i];
      const correctAnswer = this.quizQuestions[i].answer;
      const similarity = stringSimilarity.compareTwoStrings(userAnswer, correctAnswer);
      const similarityPercentage = similarity * 100;
      if (similarityPercentage >= 75) {
        totalScore++;
      }
    }
    this.finalScore = (totalScore / this.quizQuestions.length) * 100;
    this.showExplanation = true;
    this.showFinalScore = true;
  }
  resetQuiz() {
    this.userAnswers = [];
    this.finalScore = 0;
    this.showExplanation = false;
  }
}
