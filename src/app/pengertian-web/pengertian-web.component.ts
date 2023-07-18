import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pengertian-web',
  templateUrl: './pengertian-web.component.html',
  styleUrls: ['./pengertian-web.component.scss']
})
export class PengertianWebComponent implements OnInit {
 
  constructor(
     private elementRef: ElementRef,
    ) { }

  
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const audioContainer = this.elementRef.nativeElement.querySelector('#audioContainer');
    const audioPlayer = audioContainer.querySelector('#audioPlayer') as HTMLAudioElement;
    audioPlayer.autoplay = true;
    audioPlayer.play();
  }
}
