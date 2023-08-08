import { Component, OnInit } from '@angular/core';
import * as stringSimilarity from 'string-similarity';

@Component({
  selector: 'app-evaluasi1',
  templateUrl: './evaluasi1.component.html',
  styleUrls: ['./evaluasi1.component.scss']
})
export class Evaluasi1Component  {

  constructor() { }

  //uraian
  quizQuestions = [
    {
      question: "1.	Apa bab kang njalari Lina kerinan?",
      answer: "bengi kuwi Lina nyumet ontel kanggo nggusah lemut nanging dheweke malah watuk lan ora bisa turu.",
 
    },
    {
      question: "2.	Kepriye watake paraga teks pacelathon ing dhuwur?",
      answer: "Mila	: sregep, resikan, preduli marang kancane Lina	: kemproh, keset",

    },
    {
      question: "3.	Ana ing ngendi wae papan panggonan pacelathon kuwi?",
      answer: "kamar lan pawon",
   
    },
    {
      question: "4.	Apa isi teks pacelathon ing dhuwur?",
      answer: "esuk kuwi Lina urung ana ing panggonane sarapan, mula Mila banjur marani Lina ing kamare, jebul Lina durung tangi amarga wingi mbengi dheweke nyumet ontel kang marai dheweke watuk lan ora bisa turu. ",
      
    },
    {
      question: "5.	Apa piwulangan kang bisa dijupuk saka pacelathon ing dhuwur?",
      answer: "Kita kudu njaga karesikan kamar supaya ora dinggo susuh lemut. ",
    },
    
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
