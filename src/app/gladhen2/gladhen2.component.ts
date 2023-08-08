import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import * as stringSimilarity from 'string-similarity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gladhen2',
  templateUrl: './gladhen2.component.html',
  styleUrls: ['./gladhen2.component.scss']
})
export class Gladhen2Component{

  constructor(private router: Router) { }

  quizzes: Quiz[] = [
    {
      question: '1.	Piwulang kang bisa dijupuk saka pethilan teks pacelathon kasebut yaiku …',
      options: ['a.	Dadi pelajar kuwi kudu tangi gasik', 
                'b.	Dadi bocah kudu mangkat sekolah gasik', 
                'c.	Yen arep urip sarwa kepenak, kudu bekti wong tuwa', 
                'd.	Yen arep mangkat sekolah kudu ngrewangi wong tuwa dhisik'],
      answer: 'c.	Yen arep urip sarwa kepenak, kudu bekti wong tuwa',
      explanation: 'Kaya biyasane, esuk-esuk ngene iki Vina wis tangi turu. Dheweke cepet-cepet njupuk sapu kanggo nyapu latar.”, “Dheweke eling bab kerepotan ibune.”, lan “Bu, kula mawon ingkang umbah-umbah, ibu kendel rumiyin.”. Saka ukara-ukara kuwi bisa dijupuk dudutan yen Vina kuwi bocah kang sregep, gemati, lan bekti marang ibune. Dadi piwulang kang bisa dijupuk saka pethilan teks pacelathon kasebut yaiku yen arep urip sarwa kepenak, kudu bekti wong tuwa.'
    },
    {
      question: '2.	Saka teks pacelathon kuwi, Vina nduweni watak kaya ing ngisor iki, kejaba …',
      options: ['a.	Sregep ', 
                'b.	Pangerten ', 
                'c.	Temen ', 
                'd.	Pinter'],
      answer: 'd.	Pinter',
      explanation: 'Saka ukara “Kaya biyasane, esuk-esuk ngene iki Vina wis tangi turu. Dheweke cepet-cepet njupuk sapu kanggo nyapu latar.” Bisa dijupuk dudutan yen Vina bocah kang sregep. Saka ukara “Dheweke eling bab kerepotan ibune.” Bisa dijupuk dudutan yen Vina uga nduweni watak pangerten marang ibune. Saka ukara “(Vina nyawang ibune kang lagi umbah-umbah klambi titipan tanggane) Vina: “Bu, kula mawon ingkang umbah-umbah, ibu kendel rumiyin.” Bisa dijupuk dudutan yen Vina kuwi uga nduweni watak temen. Dadi, saka pacelathon ing dhuwur kang udu kalebu watake Vina yaiku pinter.'
    },
    {
      question: '3.	Papan panggonan kang ana saka pacelathon ing dhuwur, kejaba …',
      options: ['a.	Jedhing', 
                'b.	Senthong ', 
                'c.	Latar ', 
                'd.	Pawon'],
      answer: 'b.	Senthong ',
      explanation: 'Saka ukara “Dheweke cepet-cepet njupuk sapu kanggo nyapu latar.” Wis cetha yen papan panggonan pacelathon kuwi ana ing latar. Saka ukara “Sampun Bu, menika nembe mendhet sekul kagem sangu sekolah.” Bisa dijupuk dudutan yen papan panggonan pacelathon kuwi ana ing pawon. Saka ukara “(Vina nyawang ibune kang lagi umbah-umbah klambi titipan tanggane)” Bisa dijupuk dudutan yen papan panggonan pacelathon ing dhuwur ana ing jedhing utawa ing basa Indonesia disebut kamar mandi. Dadi papan panggonan kang ora ana ing teks pacelathon kuwi yaiku senthong utawa kamar.'
    }
  ];
  quizzes2: Quiz[] = [
    {
      question: '4.	Ana ing teks pacelathon kuwi, bab kang dirembug dening paraga yaiku …',
      options: ['a.	Susahe wong cilik', 
                'b.	lemah warisan', 
                'c.	lemah kang diaku angkatan laut', 
                'd.	lemah duweke angkatan laut'],
      answer: 'c.	lemah kang diaku angkatan laut',
      explanation: 'Ana ing pacelathon kuwi Mbah Slamet nyuwun pirsa marang Wulan apa bener yen lemah warisane kuwi tekan pengadilan amarga diaku duweke angkatan laut'
    },
    {
      question: '5.	miturut teks pacelathon ing dhuwur, Mbah Slamet lan Wulan kapernah …',
      options: ['a.	Ponakane ', 
                'b.	Pakdhe ', 
                'c.	Adhine ', 
                'd.	Putune '],
      answer: 'a.	Ponakane ',
      explanation: 'Ana ing pacelathon kuwi Wulan nyebut Mbah Slamet pakdhe, mula Mbah Slamet lan Wulan kuwi kapernah ponakane'
    },
    
  ];
  quizzes3: Quiz[] = [
    {
      question: '6.	Isi teks pacelathon ing dhuwur yaiku…',
      options: ['a.	Bu Rini ngendika yen Bu Tina gerah tipes', 
                'b.	Kelas VIIA didhawuhi nggarap buku paket merga gurune ora rawuh', 
                'c.	Bu Tina ora rawuh merga gerah tipes neng griya sakit', 
                'd.	Aldo ngomong yen tugase dikumpulake neng kantor guru '],
      answer: 'b.	Kelas VIIA didhawuhi nggarap buku paket merga gurune ora rawuh',
      explanation: 'Ana telung cara kang digunakake kanggo mangerteni isi pacelathon, kayata nggatekake pacelathon; nulis bab kang wigati kaya bab kang lagi diomongake, paraga ing pacelathon, lan papan panggonan kang ana ing pacelathon; lan njupuk dudutan saka isi pacelathon. Ing pacelathon iki bab kang lagi diomongake yaiku sebab Bu Tina lagi gerah neng rumah sakit, mula kelas VII A didhawuhi nggarap buku paket supaya pasinaon basa Jawa tetep mlaku. Paraga kang nglakokake pacelathon yaiku Aldo, Ria, lan Doni sing kalebu siswa kelas VII A. Papan panggonan pacelathon kuwi ana ing kelas. Saka bab-bab kang wigati mau bisa dijupuk dudutan yen kelas VII A didhawuhi nggarap buku paket amarga gurune ora rawuh.'
    },
    {
      question: '7.	Saka pacelathon ing dhuwur, kang ndhawuhi kelas VII A nggarap buku paket yaiku... ',
      options: ['a.	Guru', 
                'b.	Aldo', 
                'c.	Bu Tina', 
                'd.	Bu Rini'],
      answer: 'd.	Bu Rini',
      explanation: 'Ana ing pacelathon kuwi dicritakake yen Aldo menyang kantor guru amarga gurune durung rawuh, banjur ing kantor guru dheweke ketemu guru piket kang ngandhani yen Bu Tina ora rawuh lan dhawuh supaya nggarap buku paket. Dadi kang dhawuh supaya kelas VII A nggarap buku paket yaiku guru piket. Banjur, guru piket kuwi sapa? Coba wacana ukarane Aldo kang unine “Ngendikane Bu Rini, Bu Tina gerah tipes. Wis ayo ndang digarap, amarga tugase mengko tetep dikumpulake neng kantor guru.” Saka ukara kuwi katon yen guru piket kang dimaksud yaiku Bu Rini amarga guru piket kang ngendika marang Aldo yen Bu Tina ora rawuh lan dhawuh supaya nggarap buku paket.'
    },
    {
      question: '8.	Paraga kang nindakake pacelathon kuwi ana … ',
      options: ['a.	Telu', 
                'b.	Papat', 
                'c.	Lima', 
                'd.	Enem  '],
      answer: 'a.	Telu',
      explanation: 'Paraga kang disebutake ing pacelathon kuwi ana Bu Tina, Bu Rini, Aldo, Ria, lan Doni. Yen pitakonane diwaca kanthi permati, kang ditekokake yaiku paraga kang nglakokake pacelathon. Paraga kang nindakake pacelathon yaiku Aldo, Ria, lan Doni.'
    },
  ];
  quizzes4: Quiz[] = [
    {
      question: '9.	Miturut teks pacelathon ing dhuwur, bab kang nyebabake Guntur diseneni ibune yaiku …',
      options: ['a.	Guntur lagi susah amarga matane lara', 
                'b.	Guntur dolanan hp ora ngerti wayah', 
                'c.	Matane Guntur lara amarga kerep dolanan hp', 
                'd.	Guntur lara mata'],
      answer: 'c.	Matane Guntur lara amarga kerep dolanan hp',
      explanation: 'Ana ing pacelathon kuwi ibune ngendika yen dolanan hp kuwi kudu ngerti wayah, amarga ora manut lan kerep dolanan hp mulane matane Guntur lara. Dadi bab kang nyebabake Guntur diseneni ibune yaiku matane Guntur lara amarga kerep dolanan hp'
    },
    {
      question: '10.	Piwulang kang bisa dijupuk saka teks pacelathon ing dhuwur yaiku …',
      options: ['a.	Pangandikane ibu kuwi mesthi kedadeyan', 
                'b.	Kita ora entuk wani marang wong tuwa', 
                'c.	Kita kudu bekti marang wong tuwa', 
                'd.	Kita kudu manut marang ngendikane wong tuwa'],
      answer: 'd.	Kita kudu manut marang ngendikane wong tuwa',
      explanation: 'Ana ing pacelathon kuwi, paraga ibu ngendika yen dikandhani wong tuwa kuwi sing manut, yen Guntur manut marang ibune mesthi matane ora bakal lara amarga kerep dolanan hp. Mula piwulang kang bisa dijupuk yaiku kita kudu manut marang ngendikane wong tuwa'
    },
  ];

  //abc
  userAnswers: { [question: string]: string } = {};
  score: number = 0;
  showExplanation: boolean = false;

  selectOption(question: string, answer: string) {
    this.userAnswers[question] = answer;
  }

  submitQuiz() {
    this.score = 0;
    for (const quiz of this.quizzes && this.quizzes2 && this.quizzes3 && this.quizzes4) {
      if (this.userAnswers[quiz.question] === quiz.answer) {
        this.score++;
      }
    }
    this.showExplanation = true;
  }

  resetQuiz() {
    this.userAnswers = {};
    this.score = 0;
    this.showExplanation = false;
  }
  getOptionIndex(option: string): number {
    return option.charCodeAt(0) - 97; // Mendapatkan indeks berdasarkan ASCII ('a' -> 0, 'b' -> 1, dst.)
  }
  
  getOptionValue(index: number): string {
    return String.fromCharCode(97 + index); // Mendapatkan nilai berdasarkan indeks ASCII (0 -> 'a', 1 -> 'b', dst.)
  }
  getOptionLetter(index: number): string {
    return String.fromCharCode(97 + index).toUpperCase(); // Mengembalikan huruf besar (A, B, C, D)
  }
  isOptionCorrect(option: string, answer: string): boolean {
    return option === answer;
  }

}
