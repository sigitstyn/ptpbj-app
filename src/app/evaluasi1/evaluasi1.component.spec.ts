import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evaluasi1Component } from './evaluasi1.component';

describe('Evaluasi1Component', () => {
  let component: Evaluasi1Component;
  let fixture: ComponentFixture<Evaluasi1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Evaluasi1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Evaluasi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
