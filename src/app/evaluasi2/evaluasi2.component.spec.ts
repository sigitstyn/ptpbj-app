import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evaluasi2Component } from './evaluasi2.component';

describe('Evaluasi2Component', () => {
  let component: Evaluasi2Component;
  let fixture: ComponentFixture<Evaluasi2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Evaluasi2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Evaluasi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
