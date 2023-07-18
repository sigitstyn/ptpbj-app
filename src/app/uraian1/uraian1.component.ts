import { Component, OnInit } from '@angular/core';
import * as stringSimilarity from 'string-similarity';

@Component({
  selector: 'app-uraian1',
  templateUrl: './uraian1.component.html',
  styleUrls: ['./uraian1.component.scss']
})
export class Uraian1Component  {

  constructor() { }

  
  //uraian
  quizQuestions = [
    {
      question: "1.	Paraga-paraga kang ana ing pacelathon kuwi yaiku …",
      answer: "Mbah Yati, Wahyu, Eka, lan Reni",
      explanation: "Paraga-paraga kang disebutake ana ing pacelathon kuwi yaiku Mbah Yati, Wahyu, Eka, lan Reni"
    },
    {
      question: "2.	Saka pacelathon kuwi, paraga Wahyu nduweni sipat kang …",
      answer: "Sopan, seneng mbantu wong liya",
      explanation: "Saka ukara “Mbah, menawi kula lan kanca-kanca mbantu mbektakaken jeram menika ngantos dalemipun panjenengan, kados pundi?”, bisa dijupuk dudutan yen Wahyu nduweni sipat yen seneng mbantu wong liya Ing pacelathon kuwi Wahyu nggunakake basa krama alus marang tiyang sepuh mula bisa dijupuk dudutan yen Wahyu bocah kang sopan merga ngerti nggunakake unggah-ungguh."
    },
    {
      question: "3.	Papan panggonan kang ana ing pacelathon kuwi yaiku …",
      answer: "Prapatan, pinggir dalan",
      explanation: "Saka ukara “Nalika mulih sekolah, Wahyu, Reni, lan Eka mlaku bebarengan karo ngomong-ngomong. Satekane ing prapatan, cah telu mau weruh Mbah Yati kang lagi kesusahan ing pinggir dalan.”, bisa dijupuk dudutan yen papan panggonan kang ana ing pacelathon kuwi yaiku ana ing prapatan lan pinggir dalan."
    },
    {
      question: "4.	Isi pacelathon kuwi yaiku …",
      answer: "Wahyu, Eka, lan Reni mbantu Mbah Yati kang lagi kesusahan ing pinggir dalan merga jeruke padha wutah",
      explanation: "Ana telung cara kang digunakake kanggo mangerteni isi pacelathon, kayata nggatekake pacelathon; nulis bab kang wigati kaya bab kang lagi diomongake, paraga ing pacelathon, lan papan panggonan kang ana ing pacelathon; lan njupuk dudutan saka isi pacelathon. Ing pacelathon iki bab kang lagi diomongake yaiku jeruke Mbah Yati wutah merga kreseke suwek. Paraga kang nglakokake pacelathon yaiku Wahyu, Eka, lan Reni. Papan panggonan pacelathon kuwi ana ing pinggir dalan. Saka bab-bab kang wigati mau bisa dijupuk dudutan yen Wahyu, Eka, lan Reni mbantu Mbah Yati kang lagi kesusahan ing pinggir dalan merga jeruke padha wutah."
    },
    {
      question: "5.	Piwulang kang bisa dijupuk saka pacelathon ing dhuwur yaiku …",
      answer: "Kita kudu mbantu wong kang lagi susah",
      explanation: "Ing pacelathon kuwi nalika Wahyu, Eka lan Reni weruh Mbah Yati kang lagi kesusahan, banjur bocah telu mau banjur marani lan mbantu Mbah Yati. Mula piwulang kang bisa dijupuk saka pacelathon kuwi yaiku kita kudu mbantu wong kang lagi susah."
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
