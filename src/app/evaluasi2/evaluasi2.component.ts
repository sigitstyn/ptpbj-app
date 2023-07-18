import { Component, OnInit } from '@angular/core';
import { QuizQuestion } from '../models/quiz.model';
import * as stringSimilarity from 'string-similarity';

@Component({
  selector: 'app-evaluasi2',
  templateUrl: './evaluasi2.component.html',
  styleUrls: ['./evaluasi2.component.scss']
})
export class Evaluasi2Component {

  constructor() { }
  quizQuestions = [
    {
      question: "1. Apa bab kang njalari Tian mara ing omahe Yogi?",
      answer: "Jawaban benar"
    },
    {
      question: "2. Kepriye watake paraga teks pacelathon ing dhuwur?",
      answer: "Jawaban benar"
    },
    {
      question: "3. Apa isi teks pacelathon ing dhuwur?",
      answer: "Jawaban benar"
    },
    {
      question: "4. Apa dudutan kang bisa dijupuk saka teks pacelathon ing dhuwur?",
      answer: "Jawaban benar"
    },
    {
      question: "5. Apa pitutur kang bisa dijupuk saka teks pacelathon ing dhuwur?",
      answer: "Jawaban benar"
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
