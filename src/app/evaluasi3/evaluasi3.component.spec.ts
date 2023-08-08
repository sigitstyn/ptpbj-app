import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evaluasi3Component } from './evaluasi3.component';

describe('Evaluasi3Component', () => {
  let component: Evaluasi3Component;
  let fixture: ComponentFixture<Evaluasi3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Evaluasi3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Evaluasi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
