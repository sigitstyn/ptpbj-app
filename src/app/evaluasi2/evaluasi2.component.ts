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
      answer: "dheweke arep mesthekake marang Yogi sida bal-balan apa ora amarga langite katon mendhung"
    },
    {
      question: "2. Kepriye watake paraga teks pacelathon ing dhuwur?",
      answer: "Tian		: sopan, sumelang Yogi		: kendel, ora gampang percaya Pak Yadi	: grapyak Ibu 		: preduli"
    },
    {
      question: "3. Apa isi teks pacelathon ing dhuwur?",
      answer: "Tian pamit marang ibune arep neng omahe Yogi takon sida bal-balan apa ora amarga mendhung. Satekane ing omahe Yogi, dheweke ngomong yen tetep bal-balan"
    },
    {
      question: "4. Apa dudutan kang bisa dijupuk saka teks pacelathon ing dhuwur?",
      answer: "kanggo wong bal-balan yen wayahe main kudu tetep main sanadyan udan, amarga udan kuwi wis biyasa lan udu alangan kanggo bal-balan"
    },
    {
      question: "5. Apa pitutur kang bisa dijupuk saka teks pacelathon ing dhuwur?",
      answer: "Kita kudu netepi janji kang wis dimupakati"
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
