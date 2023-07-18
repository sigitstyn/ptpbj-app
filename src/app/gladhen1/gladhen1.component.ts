import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz.model';
@Component({
  selector: 'app-gladhen1',
  templateUrl: './gladhen1.component.html',
  styleUrls: ['./gladhen1.component.scss']
})
export class Gladhen1Component  {


  constructor() { }

  quizzes: Quiz[] = [
    {
      question: '1.	Bab kang njalari kadadeyane pacelathon ing dhuwur yaiku …',
      options: ['a.	Dadi pelajar kuwi kudu tangi gasik', 
                'b.	Kagunaane perangan-perangan wit klapa', 
                'c.	Saliyane woh klapa, perangan liyane uga bisa digunakake', 
                'd.	Fifi takon marang kancane gayut klapa'],
      answer: 'a.	Dadi pelajar kuwi kudu tangi gasik',
      explanation: 'Ana ing kono Fifi takon marang Hana tegese wit klapa disebut wit sewu kagunan, banjur Hana nerangake alesane wit mau disebut wit sewu kagunan. Mula bab kang njalari pacelathon ing dhuwur yaiku wit klapa kang disebut wit sewu kagunan.'
    },
    {
      question: '2.	Isi saka pacelathon ing dhuwur yaiku …',
      options: ['a.	Fifi takon marang Hana kagunaane wit klapa', 
                'b.	Fifi ora percaya marang Hana yen wit klapa kuwi wit sewu kagunan', 
                'c.	Fifi lan Hana ngomongake wit klapa', 
                'd.	Hana nerangake marang Fifi gayut kagunaane perangan-perangan wit klapa'],
      answer: 'd.	Hana nerangake marang Fifi gayut kagunaane perangan-perangan wit klapa',
      explanation: 'Cara kang digunakake kanggo mangerteni isi pacelathon, kayata nggatekake pacelathon; nulis bab kang wigati kaya bab kang lagi diomongake, paraga ing pacelathon, lan papan panggonan kang ana ing pacelathon; lan njupuk dudutan saka isi pacelathon. Ing pacelathon iki bab kang lagi diomongake yaiku gunane perangan-perangan saka wit klapa. Paraga kang nglakokake pacelathon yaiku Fifi lan Hana. Saka bab-bab kang wigati mau bisa dijupuk dudutan yen Hana nerangake marang Fifi gayut kagunaane perangan-perangan wit klapa.'
    },
    {
      question: '3.	Paraga kang disebutake ana pacelathon ing dhuwur yaiku …',
      options: ['a.	Fifi', 
                'b.	Hana lan Fifi', 
                'c.	Bu guru, Hana, lan Fifi', 
                'd.	Hana'],
      answer: 'c.	Bu guru, Hana, lan Fifi',
      explanation: 'Paraga-paraga kang disebutake ana ing pacelathon kuwi yaiku bu guru, Hana, lan Fifi.'
    },
    {
      question: '4.	Saka pacelathon ing dhuwur, paraga Fifi nduweni watak kaya ing ngisor iki, kejaba …',
      options: ['a.	Ora gampang percaya omongane uwong', 
                'b.	Seneng mangan  ', 
                'c.	Pengen ngerti gayut sawijining bab', 
                'd.	Iseng '],
      answer: 'b.	Seneng mangan  ',
      explanation: 'Saka ukara pacelathon “Han, mau nalika pasinaon IPA bab woh-wohan, Bu Ajeng ngendika yen wit klapa kuwi disebut uga wis sewu kagunan. Mangkono kuwi tegese kepriye ta, Han?” lan ukara “Banjur perangan kang liyane kuwi kagunaane kanggo apa ta, Han?”, bisa dijupuk dudutan yen Fifi nduweni sipat kang pengen ngerti gayut sawijining bab. Saka ukara “Saka oyod nganti wohe kuwi bisa digunakake kabeh? Apa iya ta, Han?” (Ora percaya karo jawabane kancane), bisa dijupuk dudutan yen Fifi kuwi nduweni sipat kang ora gampang percaya marang wong liya.Saka ukara “Hehe… ya aku njaluk ngapura, Han. Aku lhak mung guyon ta, sapa ngerti aku mbokapusi.”, bisa dijupuk dudutan yen Fifi nduweni sipat kang iseng.Mula, saka pacelathon ing dhuwur watak utawa sipat kang ora diduweni Fifi yaiku seneng mangan'
    },
    {
      question: '5.	Dudutan kang bisa dijupuk saka pacelathon ing dhuwur yaiku …',
      options: ['a.	Fifi sinau IPA bab woh-wohan', 
                'b.	Wit klapa disebut wit sewu kagunan amarga perangan wit klapa ana kagunane kabeh', 
                'c.	Fifi lan Hana ngomongake perangan-perangan kang ana ing wit klapa ', 
                'd.	Ing jaman biyen, glugu wit klapa digunakake kanggo jembatan lan blarake digunakake kanggo payon omah'],
      answer: 'b.	Wit klapa disebut wit sewu kagunan amarga perangan wit klapa ana kagunane kabeh',
      explanation: 'Ana ing pacelathon kuwi nalika sekolah Fifi sinau bab woh-wohan, lan gurune ngendika yen wit klapa kuwi disebut wit sewu kagunan. Banjur Fifi takon marang Hana tegese wit klapa kang disebut wit sewu kagunan, lan Hana nerangake alesane wit klapa disebut wit sewu kagunan marang Fifi. Mula dudutan kang bisa dijupuk saka teks pacelathon ing dhuwur yaiku wit klapa disebut wit sewu kagunan amarga perangan wit klapa ana kagunane kabeh.'
     }
  ];
  quizzes2: Quiz[] = [
    {
      question: '6.	Papan panggonan lan wektu kang ana ing pacelathon kuwi yaiku …',
      options: ['a.	Plataran omah lan wayah wengi', 
                'b.	Plataran omah lan wayah sore', 
                'c.	Ngarep omah lan wayah sore', 
                'd.	Pendhapa lan wayah bengi'],
      answer: 'a.	Plataran omah lan wayah wengi',
      explanation: 'Saka ukara “Dheweke lungguh ijen ing lincak ngarep omah”, bisa dijupuk dudutan yen Diana lungguh ing lincak kang panggonane ana ing ngarep omah utawa plataran. Saka ukara “nyawang padhange lampu kang nyorot ana ing dalan gedhe”, bisa dijupuk dudutan yen wektu kang ana ing pacelathon kuwi yaiku wayah wengi.'
    },
    {
      question: '7.	Watake Diana manut pacelathon ing dhuwur yaiku …',
      options: ['a.	Ngugemi janji marang wong liya', 
                'b.	Ora bisa urip mandiri', 
                'c.	Wani karo wong tuwa', 
                'd.	Ora pangerten marang wong tuwa'],
      answer: 'd.	Ora pangerten marang wong tuwa',
      explanation: 'Saka ukara ibune Diana “Ndhuk, matura marang sing ndhawuhi, menawa anggone mbayar buku wulan ngarep wae.” Lan jawabane Diana “Boten, Bu, kula lingsem kaliyan kanca-kanca.”, bisa dijupuk dudutan yen Diana nduweni watak kang ora pangerten marang wong tuwa.'
    },
    {
      question: '8.	Saka pacelathon ing dhuwur, kang lagi padu yaiku …',
      options: ['a.	Bapak lan ibu', 
                'b.	Ibu lan Kemuning', 
                'c.	Bapak lan Kemuning', 
                'd.	Kemuning lan keluarga '],
      answer: 'a.	Bapak lan ibu',
      explanation: 'Saka ukara “Diana krungu tangise ibune kang lagi udur karo bapake”, tembung “udur” miturut bausastra kuwi tegese pepadon rebut bener. Mula, bisa dijupuk dudutan kang lagi udur/padu yaiku ibu lan bapake Diana.'
    },
    
  ];
  quizzes3: Quiz[] = [
    {
      question: '9.	Papan panggonan saka pacelathon ing dhuwur kadadeyan ana ing …',
      options: ['a.	Kelas ', 
                'b.	Kantor guru', 
                'c.	Kantor BK',
                'd.	Perpustakaan'],
      answer: 'c.	Kantor BK',
      explanation: 'Ing pacelathon kuwi diterangake yen Roni manggihi Pak Heri ing kantor kang gunane kanggo nangani siswa bermasalah utawa siswa kang nduweni prakara. Ing sekolah, kantor kang gunane kanggo nangani siswa bermasalah utawa siswa kang nduweni prakara yaiku kantor BK.'
    },
    {
      question: '10.	Pitutur kang bisa dijupuk saka pacelathon ing dhuwur yaiku …',
      options: ['a.	Dadi bocah kudu kendel', 
                'b.	Dadi bocah kudu sumeh marang wong liya',
                'c.	Aja seneng mbantah omongane wong tuwa',
                'd.	Aja seneng njupuk barange wong tanpa idin'],
      answer: 'd.	Aja seneng njupuk barange wong tanpa idin',
      explanation: 'Ing pacelathon kuwi Pak Heri ngendika yen njupuk barange uwong kuwi prakara kang ala lan kudu nembung dhisik marang wong kang nduweni. Mula pitutur pacelathon ing dhuwur yaiku aja seneng njupuk barange wong tanpa idin.'
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
    for (const quiz of this.quizzes && this.quizzes2 && this.quizzes3) {
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
